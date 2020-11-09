export interface Order {
    order_number: number;
    order_status: string;
    customer_name: string;
    order_items: object;
    order_amount: number;
}