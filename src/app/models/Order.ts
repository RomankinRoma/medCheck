export class Order {
  id: number;
  userId: number;
  date: string;
  therapist: string;
  orderNumber: number;
  hospital: string;
  medicine: boolean;
  food: boolean;
  warHero: boolean;
  medWorker: boolean;
  comment: string;

  constructor(id: number, userId: number, th: string, oN: number, h: string, d: string, medicine: boolean,
              food: boolean,
              warHero: boolean,
              medWorker: boolean,
              comment: string) {
    this.therapist = 'Someone';
    this.date = d;
    this.hospital = '13';
    this.orderNumber = 12;
    this.userId = userId;
    this.id = id;
    this.food = food;
    this.warHero = warHero;
    this.medicine = medicine;
    this.comment = comment;
  }

  public toString(): string {
    return 'Therapist:' + this.therapist + ' Date:'
      + this.date.slice(4, 16) + ' OrderNumber:' + this.orderNumber + ' Hospital:' + this.hospital + '\n';
  }
}
