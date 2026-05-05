import { useEffect, useState } from "react";

const STORAGE_KEY = "orders";

const parseOrders = (value) => {
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

const getStoredOrders = () => parseOrders(localStorage.getItem(STORAGE_KEY));

const saveOrders = (orders) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
};

export const useOrders = () => {
  const [orders, setOrders] = useState(getStoredOrders);

  useEffect(() => {
    setOrders(getStoredOrders());
  }, []);

  const addOrder = (order) => {
    const nextOrders = [order, ...getStoredOrders()];
    saveOrders(nextOrders);
    setOrders(nextOrders);
  };

  const clearOrders = () => {
    saveOrders([]);
    setOrders([]);
  };

  return {
    orders,
    addOrder,
    clearOrders,
  };
};
