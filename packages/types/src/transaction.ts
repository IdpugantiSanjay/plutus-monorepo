export class Transaction {
  amount: number
  title: string
  date: Date | string
  username: string
  category: string

  constructor(options:  Transaction) {
    this.amount = options.amount
    this.title = options.title
    this.date = options.date
    this.username = options.username
    this.category = options.category
  }
}