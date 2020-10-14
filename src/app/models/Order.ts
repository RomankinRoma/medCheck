export class Order {
  date: Date;
  therapist: string;
  orderNumber: number;
  hospital: string;
  constructor(th: string, oN: number, h: string, d: Date) {
    this.therapist = th;
    this.date = d;
    this.hospital = h;
    this.orderNumber = oN;
  }
}
