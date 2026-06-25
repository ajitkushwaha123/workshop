import { cashfreeClient } from "./clients";

export async function createCashfreeOrder({
  orderId,
  amount,
  currency = "INR",
  customerId,
  customerName,
  customerPhone,
  customerEmail,
  returnUrl,
}) {
  const { data } = await cashfreeClient.post("/orders", {
    order_id: orderId,
    order_amount: amount,
    order_currency: currency,

    customer_details: {
      customer_id: customerId,
      customer_name: customerName,
      customer_phone: customerPhone,
      customer_email: customerEmail,
    },

    order_meta: {
      return_url: returnUrl,
    },
  });

  return data;
}
