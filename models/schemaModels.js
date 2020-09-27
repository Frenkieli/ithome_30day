let mongoose  = require('mongoose');
const accounts = new mongoose.Schema({
  account_id: { type: Number},
  limit: { type: Number},
  products: { type: Array},
});
const customers = new mongoose.Schema({
  username: { type: String},
  name: { type: String},
  address: { type: String},
  birthdate: { type: Date},
  email: { type: String},
  accounts: { type: Array},
  tier_and_details: { type: Object},
});
const transactions = new mongoose.Schema({
  account_id: { type: Number},
  transaction_count: { type: Number},
  bucket_start_date: { type: Date},
  bucket_end_date: { type: Date},
  transactions: { type: Array},
});
const schema = {
  accounts: mongoose.model('accounts', accounts, 'accounts'),
  customers: mongoose.model('customers', customers, 'customers'),
  transactions: mongoose.model('transactions', transactions, 'transactions'),
}
module.exports = schema;