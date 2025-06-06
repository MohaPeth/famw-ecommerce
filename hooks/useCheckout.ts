"use client"

import { useState } from "react"

interface OrderItem {
  productId: number
  quantity: number
  size: string
  color: string
  product?: any
}

interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  country: string
}

interface PaymentInfo {
  method: string
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  cardName?: string
  paypalEmail?: string
  airtelNumber?: string
  airtelPin?: string
}

interface OrderData {
  items: OrderItem[]
  shipping: ShippingInfo
  payment: PaymentInfo
  totals: {
    subtotal: number
    shipping: number
    total: number
  }
}

interface PaymentResult {
  success: boolean
  orderId?: string
  error?: string
}

export function useCheckout() {
  const [isProcessing, setIsProcessing] = useState(false)

  const processPayment = async (orderData: OrderData): Promise<PaymentResult> => {
    setIsProcessing(true)

    try {
      // Simulate payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate payment processing based on method
      const { method } = orderData.payment

      switch (method) {
        case "card":
          return await processCardPayment(orderData)
        case "paypal":
          return await processPayPalPayment(orderData)
        case "airtel":
          return await processAirtelPayment(orderData)
        default:
          throw new Error("Méthode de paiement non supportée")
      }
    } catch (error) {
      console.error("Payment processing error:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Erreur de paiement",
      }
    } finally {
      setIsProcessing(false)
    }
  }

  const processCardPayment = async (orderData: OrderData): Promise<PaymentResult> => {
    // Simulate card payment validation
    const { cardNumber, expiryDate, cvv, cardName } = orderData.payment

    if (!cardNumber || !expiryDate || !cvv || !cardName) {
      throw new Error("Informations de carte incomplètes")
    }

    // Basic validation
    if (cardNumber.replace(/\s/g, "").length < 16) {
      throw new Error("Numéro de carte invalide")
    }

    if (cvv.length < 3) {
      throw new Error("CVV invalide")
    }

    // Simulate successful payment
    const orderId = generateOrderId()

    // Store order in localStorage (in real app, this would be sent to backend)
    storeOrder(orderId, orderData)

    return {
      success: true,
      orderId,
    }
  }

  const processPayPalPayment = async (orderData: OrderData): Promise<PaymentResult> => {
    const { paypalEmail } = orderData.payment

    if (!paypalEmail) {
      throw new Error("Email PayPal requis")
    }

    // Simulate PayPal payment flow
    const orderId = generateOrderId()
    storeOrder(orderId, orderData)

    return {
      success: true,
      orderId,
    }
  }

  const processAirtelPayment = async (orderData: OrderData): Promise<PaymentResult> => {
    const { airtelNumber, airtelPin } = orderData.payment

    if (!airtelNumber || !airtelPin) {
      throw new Error("Informations Airtel Money incomplètes")
    }

    if (airtelPin.length !== 4) {
      throw new Error("Code PIN invalide")
    }

    // Simulate Airtel Money payment
    const orderId = generateOrderId()
    storeOrder(orderId, orderData)

    return {
      success: true,
      orderId,
    }
  }

  const generateOrderId = (): string => {
    const timestamp = Date.now().toString()
    const random = Math.random().toString(36).substring(2, 8)
    return `FAMW${timestamp.slice(-6)}${random.toUpperCase()}`
  }

  const storeOrder = (orderId: string, orderData: OrderData) => {
    const order = {
      id: orderId,
      ...orderData,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      trackingNumber: `FAMW${orderId.slice(-6)}`,
    }

    // Store in localStorage (in real app, this would be sent to backend)
    const existingOrders = JSON.parse(localStorage.getItem("famw_orders") || "[]")
    existingOrders.push(order)
    localStorage.setItem("famw_orders", JSON.stringify(existingOrders))
  }

  return {
    processPayment,
    isProcessing,
  }
}
