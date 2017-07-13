define({ "api": [
  {
    "type": "get",
    "url": "/api/accounts",
    "title": "Request customer all accounts",
    "version": "1.0.0",
    "name": "GetAccountsList",
    "group": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Customer Accounts list\",\n\t\"data\": [\n\t\t{\n\t\t\t\"balance\": 5000.0,\n\t\t\t\"ac_no\": \"01715555555\",\n\t\t\t\"create_date\": \"2017-04-30\",\n\t\t\t\"ac_currency\": \"BDT\",\n\t\t\t\"t24_prod_nm\": \"Wallet\",\n\t\t\t\"category_t24\": \"998\",\n\t\t\t\"deposit_type_nm\": \"\",\n\t\t\t\"id\": 1,\n\t\t\t\"ac_title\": \"Omar\"\n\t\t}\n\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./accounts/views.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/:ac_no",
    "title": "Request customer single account",
    "version": "1.0.0",
    "name": "GetCustomerAccount",
    "group": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ac_no",
            "description": "<p>customer account no</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Account Balance detail\",\n\t\"data\": {\n\t\t\"ac_currency\": \"BDT\",\n\t\t\"balance\": \"360000000\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./accounts/views.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api-token-auth",
    "title": "Request an Access Token",
    "version": "1.0.0",
    "name": "GetAccessToken",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": 'jhondoe',\n    \"password\": 'mypassword'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"A backend authenticated the credentials!\",\n\t\"data\": {\n\t\t\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaXNfYWN0aXZlIjp0cnVlLCJlbWFpbCI6ImFkbWluQGlub3YuaW8iLCJpc19zdXBlcnVzZXIiOnRydWUsImlzX3N0YWZmIjp0cnVlLCJzZXNzaW9uX2tleSI6Imx1YndiNWw3aDM3ZGk1Znd3b2V4NXhxYnIzcTgwZWFuIiwiaWQiOjF9.hkyyG6Cg7P7nrrPvTz-_IdP4HHjLLrJjPcm7yzds1IA\",\n\t\t\"user\": {\n\t\t\t\"username\": \"admin\",\n\t\t\t\"is_superuser\": true,\n\t\t\t\"first_name\": \"\",\n\t\t\t\"last_name\": \"\",\n\t\t\t\"is_staff\": true,\n\t\t\t\"last_login\": \"2017-04-24T09:51:35.658Z\",\n\t\t\t\"date_joined\": \"2017-04-24T09:48:09.688Z\",\n\t\t\t\"is_active\": true,\n\t\t\t\"id\": 1,\n\t\t\t\"email\": \"admin@inov.io\",\n            \"group\": \"customer\",\n            # if its a vendor user , then it'll return vendor obj also\n            \"vendor\": {\n                \"id\": 3,\n\t\t\t\t\"phone\": \"02313212312\",\n\t\t\t\t\"shipping_fee\": 250.0,\n\t\t\t\t\"name\": \"Aarong\",\n\t\t\t\t\"address\": \"House - 57 ,Road - 17 . Sector 14 . Uttara 1220\\r\\nDhaka . Bangladesh\"\n\t\t\t},\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auths/views.py",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/change_customer_password",
    "title": "Change Customer password",
    "version": "1.0.0",
    "name": "ChangeCustomerPassword",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"current_password\": \"current_password\",\n    \"password\": \"password\",\n    \"password1\": \"password1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Password successful change  for admin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/change_customer_pin/:pin_number",
    "title": "Change customer Pin",
    "version": "1.0.0",
    "name": "ChangeCustomerPin",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pin_number",
            "description": "<p>Customer Pin pumber</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t'message': 'Customer pin successfully updated'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/pin_views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/create_customer_pin",
    "title": "Create customer pin",
    "version": "1.0.0",
    "name": "CreateCustomerPin",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"pin_number\": \"customer_pin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    'status': True,\n    'message': 'Customer pin successfully created'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/pin_views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer",
    "title": "Request a single customer",
    "version": "1.0.0",
    "name": "GetCustomer",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Customer list\",\n\t\"data\": [\n\t\t{\n\t\t\t\"user_id\": 2,\n\t\t\t\"sms_mobile_no\": \"34242342323\",\n\t\t\t\"cust_id\": \"02923423432\",\n\t\t\t\"pin_number\": null,\n\t\t\t\"present_addr\": \"adsa\",\n\t\t\t\"cust_name\": \"Rahim khan\",\n\t\t\t\"email_addr\": \"\",\n\t\t\t\"cust_title\": \"MR\",\n\t\t\t\"id\": 1\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers",
    "title": "Request all customers",
    "version": "1.0.0",
    "name": "GetCustomerList",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Customer list\",\n\t\"data\": [\n\t\t{\n\t\t\t\"user_id\": 2,\n\t\t\t\"sms_mobile_no\": \"34242342323\",\n\t\t\t\"cust_id\": \"02923423432\",\n\t\t\t\"pin_number\": null,\n\t\t\t\"present_addr\": \"adsa\",\n\t\t\t\"cust_name\": \"Rahim khan\",\n\t\t\t\"email_addr\": \"\",\n\t\t\t\"cust_title\": \"MR\",\n\t\t\t\"id\": 1\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/create_customer_otp",
    "title": "Request a customer OTP",
    "version": "1.0.0",
    "name": "GetCustomerOTP",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"otp_type\": \"customer_add\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"ok\",\n\t\"data\": {\n\t\t\"otp\": \"8230\",\n\t\t\"response\": \"Finwallet OTP : 8230\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/otp_views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/check_customer_otp/:otp_type/:otp_number",
    "title": "Verify customer OTP",
    "version": "1.0.0",
    "name": "VerifyCustomerOTP",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp_type",
            "description": "<p>app unique otp_type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp_number",
            "description": "<p>system generated otp number</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Customer OTP verify successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customers/otp_views.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/order/:guid",
    "title": "Requset an order",
    "version": "1.0.0",
    "name": "GetOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Order unique guid</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"status\": true,\n    \"message\": \"order detail\",\n    \"data\":\n        {\n            \"vendor\": {\n                \"meta\": {\n                    \"shipping_fee\": 150,\n                    \"name\": \"TextMart\"\n                },\n                \"id\": 25\n            },\n            \"order_no\": \"1011\",\n            \"discount\": 50.0,\n            \"ordered_at\": \"16 Apr 2017 04:11AM\",\n            \"guid\": \"4b35f1e7-cac1-496c-b2e3-0ea2b306e7e8\",\n            \"id\": 6,\n            \"customer\": {\n                \"id\": 15,\n                \"cust_id\": \"0010025546\",\n                \"cust_title\": \"MR\",\n                \"cust_name\": \"MD.OMAR FARUK\",\n                \"present_addr\": \"ZENTH TOWER, H-8/A//1, F-C10, R-14\",\n                \"sms_mobile_no\": \"01717005259\",\n                \"user_id\": 16,\n                \"pin_number\": 1234,\n                \"email_addr\": \"\"\n            },\n            \"grand_total_price\": 400.0,\n            \"total_price\": 350.0,\n            \"order_type\": \"Wallet\",\n            \"products\": [\n                {\n                    \"product_code\": \"1005\",\n                    \"is_approved\": false,\n                    \"title\": \"Polo shirt\",\n                    \"price\": 400.5,\n                    \"tags\": [],\n                    \"quantity\": 1,\n                    \"discount\": null,\n                    \"images\": [\n                        {\n                            \"is_featured\": true,\n                            \"resize_images\": {\n                                \"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\",\n                                \"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_440.png\"\n                            },\n                            \"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\"\n                        },\n                        {\n                            \"is_featured\": false,\n                            \"resize_images\": {\n                                \"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\",\n                                \"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_440.png\"\n                            },\n                            \"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\"\n                        }\n                    ],\n                    \"guid\": \"4178e0a4-498a-4c95-94e8-a58696a676ad\",\n                    \"id\": 1,\n                    \"categories\": [],\n                    \"description\": \"this is description this is pants 2\"\n                }\n            ],\n            \"order_status\": {\n                \"id\": 2,\n                \"value\": \"confirmed\"\n            },\n            \"shipping_fee\": 50.0\n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders/views.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "Request Order list",
    "version": "1.0.0",
    "name": "GetOrders",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number , default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>page limit , default 20 and max limit 100 , for all -1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>order_status as number Ex 1,2 [optionals]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>vendor_id as number Ex 1,2 [optionals]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"meta\": {\n\t\t\"count\": 2,\n\t\t\"pagesize\": 20,\n\t\t\"offset\": 0\n\t},\n\t\"orders\": [\n\t\t{\n\t\t\t\"vendor\": {\n\t\t\t\t\"meta\": {\n\t\t\t\t\t\"shipping_fee\": 150,\n\t\t\t\t\t\"name\": \"TextMart\"\n\t\t\t\t},\n\t\t\t\t\"id\": 25\n\t\t\t},\n\t\t\t\"order_no\": \"1011\",\n\t\t\t\"discount\": 50.0,\n\t\t\t\"ordered_at\": \"16 Apr 2017 04:11AM\",\n\t\t\t\"guid\": \"4b35f1e7-cac1-496c-b2e3-0ea2b306e7e8\",\n\t\t\t\"id\": 6,\n\t\t\t\"customer\": {\n\t\t\t\t\"id\": 15,\n\t\t\t\t\"cust_id\": \"0010025546\",\n\t\t\t\t\"cust_title\": \"MR\",\n\t\t\t\t\"cust_name\": \"MD.OMAR FARUK\",\n\t\t\t\t\"present_addr\": \"ZENTH TOWER, H-8/A//1, F-C10, R-14\",\n\t\t\t\t\"sms_mobile_no\": \"01717005259\",\n\t\t\t\t\"user_id\": 16,\n\t\t\t\t\"pin_number\": 1234,\n\t\t\t\t\"email_addr\": \"\"\n\t\t\t},\n\t\t\t\"grand_total_price\": 400.0,\n\t\t\t\"total_price\": 350.0,\n\t\t\t\"order_type\": \"Wallet\",\n\t\t\t\"products\": [\n\t\t\t\t{\n\t\t\t\t\t\"product_code\": \"1005\",\n\t\t\t\t\t\"is_approved\": false,\n\t\t\t\t\t\"title\": \"Polo shirt\",\n\t\t\t\t\t\"price\": 400.5,\n\t\t\t\t\t\"tags\": [],\n\t\t\t\t\t\"quantity\": 1,\n\t\t\t\t\t\"discount\": null,\n\t\t\t\t\t\"images\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"is_featured\": true,\n\t\t\t\t\t\t\t\"resize_images\": {\n\t\t\t\t\t\t\t\t\"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\",\n\t\t\t\t\t\t\t\t\"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_440.png\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"is_featured\": false,\n\t\t\t\t\t\t\t\"resize_images\": {\n\t\t\t\t\t\t\t\t\"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\",\n\t\t\t\t\t\t\t\t\"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_440.png\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"guid\": \"4178e0a4-498a-4c95-94e8-a58696a676ad\",\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"categories\": [],\n\t\t\t\t\t\"description\": \"this is description this is pants 2\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"order_status\": {\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"value\": \"confirmed\"\n\t\t\t},\n\t\t\t\"shipping_fee\": 50.0\n\t\t},\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./orders/views.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders",
    "title": "Insert an order",
    "version": "1.0.0",
    "name": "InsertOrder",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "            {\n\n                \"vendors\":[\n                        {\n                            \"vendor_id\": 25,\n                            \"total_price\": 350 ,\n                            \"shipping_fee\": 50,\n                            \"discount\": 0,\n                            \"grand_total_price\": 400,\n                            \"products\":[\n                                {\n\t\t\t\t\t\t\t\t\t\"guid\": \"23423432\",\n\t\t\t\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\t\t\t\"product_code\": \"d2fd7d\",\n                                    \"title\": \"Gents pants with gray color\",\n                                \t\"description\": \"this is description this is pants\",\n                                \t\"price\": 100.00,\n                                    \"discount\": 0,\n                                    \"total_price\" : 200,\n                                    \"quantity\": 2,\n\n\t\t\t\t\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Smart phone\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t],\n\n\t\t\t\t\t\t\t\t\t\"categories\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Cloth\"\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Food\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t    },\n                                {\n\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\"guid\": \"23423432\",\n\t\t\t\t\t\t\t\t\t\"product_code\": \"d2fd7d\",\n                                    \"title\": \"Gents pants with gray color\",\n                                \t\"description\": \"this is description this is pants\",\n                                \t\"price\": 50.00,\n                                    \"discount\": 0,\n                                    \"total_price\" : 150,\n                                    \"quantity\": 3,\n\n\t\t\t\t\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Smart phone\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t],\n\n\t\t\t\t\t\t\t\t\t\"categories\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Cloth\"\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Food\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t    }\n                            ]\n                        },\n\t\t\t\t\t{\n                            \"vendor_id\": 26,\n                            \"total_price\": 200 ,\n                            \"shipping_fee\": 50,\n                            \"discount\": 0,\n                            \"grand_total_price\": 250,\n                            \"products\":[\n                                {\n\t\t\t\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\t\t\t\"guid\": \"23423432\",\n\t\t\t\t\t\t\t\t\t\"product_code\": \"d2fd7d\",\n                                    \"title\": \"Gents pants with gray color\",\n                                \t\"description\": \"this is description this is pants\",\n                                \t\"price\": 100.00,\n                                    \"discount\": 0,\n                                    \"total_price\" : 200,\n                                    \"quantity\": 2,\n\n\t\t\t\t\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Smart phone\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t],\n\n\t\t\t\t\t\t\t\t\t\"categories\": [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Cloth\"\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\t\t\t\t\"title\": \"Food\"\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t    }]\n\t\t\t\t\t}\n\n\n                ]\n\n            }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"orders_ref\": [\n\t\t1011,1022\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders/views.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/order/:guid",
    "title": "Update an order",
    "version": "1.0.0",
    "name": "UpdateOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Order unique guid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"order_status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"status\": true,\n    \"message\": \"order updated\",\n    \"data\":\n        {\n            \"vendor\": {\n                \"meta\": {\n                    \"shipping_fee\": 150,\n                    \"name\": \"TextMart\"\n                },\n                \"id\": 25\n            },\n            \"order_no\": \"1011\",\n            \"discount\": 50.0,\n            \"ordered_at\": \"16 Apr 2017 04:11AM\",\n            \"guid\": \"4b35f1e7-cac1-496c-b2e3-0ea2b306e7e8\",\n            \"id\": 6,\n            \"customer\": {\n                \"id\": 15,\n                \"cust_id\": \"0010025546\",\n                \"cust_title\": \"MR\",\n                \"cust_name\": \"MD.OMAR FARUK\",\n                \"present_addr\": \"ZENTH TOWER, H-8/A//1, F-C10, R-14\",\n                \"sms_mobile_no\": \"01717005259\",\n                \"user_id\": 16,\n                \"pin_number\": 1234,\n                \"email_addr\": \"\"\n            },\n            \"grand_total_price\": 400.0,\n            \"total_price\": 350.0,\n            \"order_type\": \"Wallet\",\n            \"products\": [\n                {\n                    \"product_code\": \"1005\",\n                    \"is_approved\": false,\n                    \"title\": \"Polo shirt\",\n                    \"price\": 400.5,\n                    \"tags\": [],\n                    \"quantity\": 1,\n                    \"discount\": null,\n                    \"images\": [\n                        {\n                            \"is_featured\": true,\n                            \"resize_images\": {\n                                \"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\",\n                                \"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_440.png\"\n                            },\n                            \"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\"\n                        },\n                        {\n                            \"is_featured\": false,\n                            \"resize_images\": {\n                                \"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\",\n                                \"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_440.png\"\n                            },\n                            \"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\"\n                        }\n                    ],\n                    \"guid\": \"4178e0a4-498a-4c95-94e8-a58696a676ad\",\n                    \"id\": 1,\n                    \"categories\": [],\n                    \"description\": \"this is description this is pants 2\"\n                }\n            ],\n            \"order_status\": {\n                \"id\": 2,\n                \"value\": \"confirmed\"\n            },\n            \"shipping_fee\": 50.0\n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders/views.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/categories",
    "title": "Request Category list",
    "version": "1.0.0",
    "name": "GetCategories",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number , default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>page limit , default 20 and max limit 100 , for all -1</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "filename": "./products/views.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/:guid",
    "title": "Requset a product",
    "version": "1.0.0",
    "name": "GetProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Product unique guid</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "filename": "./products/views.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "Request Product list",
    "version": "1.0.0",
    "name": "GetProducts",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number , default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>page limit , default 20 and max limit 100, for all -1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Search products</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Search products with category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Search products with tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Product list\",\n\t\"meta\": {\n\t\t\"count\": 4,\n\t\t\"limit\": 20,\n\t\t\"pagesize\": 20,\n\t\t\"offset\": 0\n\t},\n\t\"data\": [\n\t\t{\n\t\t\t\"is_featured\": false,\n\t\t\t\"vendor\": {\n                \"id\": 3,\n\t\t\t\t\"phone\": \"02313212312\",\n\t\t\t\t\"shipping_fee\": 250.0,\n\t\t\t\t\"name\": \"Aarong\",\n\t\t\t\t\"address\": \"House - 57 ,Road - 17 . Sector 14 . Uttara 1220\\r\\nDhaka . Bangladesh\"\n\t\t\t},\n\t\t\t\"description\": \"this is description this is pants 2\",\n\t\t\t\"tags\": [],\n\t\t\t\"price\": 400.5,\n\t\t\t\"discount\": null,\n\t\t\t\"images\": [\n\t\t\t\t{\n\t\t\t\t\t\"is_featured\": true,\n\t\t\t\t\t\"resize_images\": {\n\t\t\t\t\t\t\"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\",\n\t\t\t\t\t\t\"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_440.png\"\n\t\t\t\t\t},\n\t\t\t\t\t\"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"is_featured\": false,\n\t\t\t\t\t\"resize_images\": {\n\t\t\t\t\t\t\"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\",\n\t\t\t\t\t\t\"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_440.png\"\n\t\t\t\t\t},\n\t\t\t\t\t\"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"product_code\": \"1005\",\n\t\t\t\"id\": 5,\n\t\t\t\"categories\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"title\": \"Watch\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"guid\": \"83d35cf8-e530-447b-839f-4b004b6f10d6\",\n\t\t\t\"is_approved\": false,\n\t\t\t\"title\": \"Polo shirt IIV\"\n\t\t},\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "filename": "./products/views.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/tags",
    "title": "Request Tag list",
    "version": "1.0.0",
    "name": "GetTags",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number , default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>page limit , default 20 and max limit 100 , for all -1</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "filename": "./products/views.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products",
    "title": "Insert a Product",
    "version": "1.0.0",
    "name": "InsertProduct",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"Polo shirt IIV 33\",\n\t\"description\": \"this is description this is pants 2\",\n\t\"price\": 400.50,\n\t\"categories\": [2],\n\t\"tags\": [],\n\t\"images\":  [\n        {\n          \"is_featured\": true,\n          \"resize_images\": {\n            \"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\",\n            \"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_440.png\"\n          },\n          \"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass1_574.png\"\n        },\n        {\n          \"is_featured\": false,\n          \"resize_images\": {\n            \"slide\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\",\n            \"feature\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_440.png\"\n          },\n          \"original\": \"https://s3-ap-southeast-1.amazonaws.com/finwallet-dev/test-image/glass2_574.png\"\n        }\n      ]\n\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./products/views.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/product/:guid",
    "title": "Update a product",
    "version": "1.0.0",
    "name": "UpdateProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>Product unique guid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n\t\"title\": \"Gents pants with gray color\",\n\t\"description\": \"this is description this is pants\",\n\t\"price\": 146.50,\n\t\"categories\": [1, 3, 4],\n    \"discount\": 12.4\n\t\"tags\": [1,2],\n\t\t\"images\": [\n                     {\n                       original : url,\n                       is_featured : true,\n                       resize_images:[\n                         { \"thumnail1\" : \"url\" },\n                         { \"thumnail2\" : \"url\" },\n                         { \"thumnail3\" : \"url\" },\n                         { \"thumnail4\" : \"url\" },\n                         { \"thumnail5\" : \"url\" },\n                         { \"thumnail6\" : \"url\" }\n                        ]\n                     },\n                    {\n                      original : url,\n                      resize_images:[\n                        { \"thumnail1\" : \"url\" },\n                        { \"thumnail2\" : \"url\" },\n                        { \"thumnail3\" : \"url\" },\n                        { \"thumnail4\" : \"url\" },\n                        { \"thumnail5\" : \"url\" },\n                        { \"thumnail6\" : \"url\" },\n                      ]\n                    },\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token  [token]</p>"
          }
        ]
      }
    },
    "filename": "./products/views.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/transactions",
    "title": "Create transaction",
    "version": "1.0.0",
    "name": "CreateTransaction",
    "group": "Transaction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ac_no\": \"2343434334\",\n    \"drcr\": \"DR/CR\",\n    \"remarks\": \"this is remarks\",\n    \"amount\": 45000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Transaction  successfull\",\n\t\"data\": {\n\t\t\"balance\": 4500.0,\n\t\t\"ac_no\": \"01715555555\",\n\t\t\"create_date\": \"2017-05-02\",\n\t\t\"ac_currency\": \"BDT\",\n\t\t\"t24_prod_nm\": \"Wallet\",\n\t\t\"category_t24\": \"998\",\n\t\t\"deposit_type_nm\": \"\",\n\t\t\"id\": 1,\n\t\t\"ac_title\": \"Omar\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./transactions/views.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/api/transactions/?page=1&limit=10",
    "title": "Request transactions list",
    "version": "1.0.0",
    "name": "GetTransactionList",
    "group": "Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number , default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>page limit , default 20 and max limit 100, for all -1</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>[token]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"status\": true,\n\t\"message\": \"Transaction list\",\n\t\"meta\": {\n\t\t\"count\": 2,\n\t\t\"limit\": -1,\n\t\t\"pagesize\": -1,\n\t\t\"offset\": 0\n\t},\n\t\"data\": [\n\t\t{\n\t\t\t\"accountno\": {\n\t\t\t\t\"balance\": 4500.0,\n\t\t\t\t\"ac_no\": \"01715555555\",\n\t\t\t\t\"create_date\": \"2017-05-02\",\n\t\t\t\t\"ac_currency\": \"BDT\",\n\t\t\t\t\"t24_prod_nm\": \"Wallet\",\n\t\t\t\t\"category_t24\": \"998\",\n\t\t\t\t\"deposit_type_nm\": \"\",\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"ac_title\": \"Omar\"\n\t\t\t},\n\t\t\t\"trndesc\": \"fund transfer \",\n\t\t\t\"created_at\": \"2017-05-02T10:58:19.638Z\",\n\t\t\t\"accountno_to\": {\n\t\t\t\t\"balance\": 7000.0,\n\t\t\t\t\"ac_no\": \"01716666666\",\n\t\t\t\t\"create_date\": \"2017-05-02\",\n\t\t\t\t\"ac_currency\": \"BDT\",\n\t\t\t\t\"t24_prod_nm\": \"Wallet\",\n\t\t\t\t\"category_t24\": \"998\",\n\t\t\t\t\"deposit_type_nm\": \"\",\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"ac_title\": \"Jabid khan\"\n\t\t\t},\n\t\t\t\"amount\": 500.0,\n\t\t\t\"dr_cr\": \"DR\",\n\t\t\t\"traceno\": \"285553461493722699\"\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./transactions/views.py",
    "groupTitle": "Transaction"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_ratul_developments_finwallet_api_apidoc_main_js",
    "groupTitle": "_home_ratul_developments_finwallet_api_apidoc_main_js",
    "name": ""
  }
] });
