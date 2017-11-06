import axios from 'axios'

export default {
  post (key, amount) {
    let config = {
      method: 'post',
      baseURL: 'https://api.sandbox.paypal.com/v1/',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      data: {
        'intent': 'sale',
        'payer': {
          'payment_method': 'paypal'
        },
        'transactions': [
          {
            'amount': {
              'total': amount,
              'currency': 'USD',
              'details': {
                'subtotal': amount,
                'tax': '0.00',
                'shipping': '0.00',
                'handling_fee': '0.00',
                'shipping_discount': '0.00',
                'insurance': '0.00'
              }
            },
            'description': 'LFH donation',
            'custom': 'EBAY_EMS_90048630024435',
            'invoice_number': '48787589673',
            'payment_options': {
              'allowed_payment_method': 'INSTANT_FUNDING_SOURCE'
            },
            'soft_descriptor': 'ECHI5786786',
            'item_list': {
              'items': [
                {
                  'name': 'LFH Donation',
                  'description': 'LFH Donation',
                  'quantity': '1',
                  'price': amount,
                  'tax': '0.00',
                  'sku': '1',
                  'currency': 'USD'
                }
              ],
              'shipping_address': {
                'recipient_name': 'Brian Robinson',
                'line1': '4th Floor',
                'line2': 'Unit #34',
                'city': 'San Jose',
                'country_code': 'US',
                'postal_code': '95131',
                'phone': '011862212345678',
                'state': 'CA'
              }
            }
          }
        ],
        'note_to_payer': 'Contact us for any questions on your order.',
        'redirect_urls': {
          'return_url': 'http://localhost:3000/paypal',
          'cancel_url': 'http://www.paypal.com/cancel'
        }
      }
    }
    return axios.request('/payments/payment', config)
  }
}
