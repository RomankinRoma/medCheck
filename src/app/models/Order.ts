
export class Order {
  date: string;
  therapist: string;
  orderNumber: number;
  hospital: string;
  medicine: boolean;
  food: boolean;
  warHero: boolean;
  medWorker: boolean;
 comment: string;
  constructor(th: string, oN: number, h: string, d: string) {
    this.therapist = 'Someone';
    this.date = d;
    this.hospital = "13";
    this.orderNumber = 12;
  }

}
