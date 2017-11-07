import axios from 'axios'

export default {
  post (key, amount, description) {
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
            'description': 'LFH Donation — ' + description,
            'custom': '',
            'invoice_number': '',
            'payment_options': {
              'allowed_payment_method': 'INSTANT_FUNDING_SOURCE'
            },
            'soft_descriptor': '',
            'item_list': {
              'items': [
                {
                  'name': 'LFH Donation — ' + description,
                  'description': 'LFH Donation — ' + description,
                  'quantity': '1',
                  'price': amount,
                  'tax': '0.00',
                  'sku': 'LFH Donation — ' + description,
                  'currency': 'USD'
                }
              ]
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
