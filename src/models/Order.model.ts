interface VacationOrder {
  type: "vacation";
  from: string;
  to: string;
  duration: string;
}

interface LeaveOrder {
  type: "leave";
  leave: "start-shift" | "end-shift";
  date: string;
}

interface TransferOrder {
  type: "transfer";
  transfer: "internal" | "external";
}

type OrderState = { state: "new" | "accepted" | "rejected" } & { [id: string]: string };

export type Order = OrderState & (VacationOrder | LeaveOrder | TransferOrder);
