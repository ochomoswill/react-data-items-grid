import React from 'react';
import './App.css'
import {DescriptionItemsGrid} from "./components/description-items";

const customerDetails = [
    {
        "label": "customer_id",
        "details": 1
    },
    {
        "label": "first_name",
        "details": "John"
    },
    {
        "label": "last_name",
        "details": "Doe"
    },
    {
        "label": "email",
        "details": "john.doe@example.com"
    },
    {
        "label": "phone_number",
        "details": "555-123-4567"
    },
    {
        "label": "address",
        "details": "123 Main Street"
    },
    {
        "label": "city",
        "details": "Anytown"
    },
    {
        "label": "state",
        "details": "CA"
    },
    {
        "label": "postal_code",
        "details": "12345"
    },
    {
        "label": "country",
        "details": "USA"
    },
    {
        "label": "company_name",
        "details": "ABC Inc."
    },
    {
        "label": "industry",
        "details": "Manufacturing"
    },
    {
        "label": "credit_limit",
        "details": 10000
    },
    {
        "label": "balance_due",
        "details": 2500
    }
]

function App() {

    return (
        <div className="App">
            <DescriptionItemsGrid
                items={customerDetails}
            />

            <DescriptionItemsGrid
                orientation={'horizontal'}
                items={customerDetails}
            />

            <DescriptionItemsGrid
                orientation={'horizontal'}
                items={customerDetails.map((item) => ({
                    title: item.label,
                    actualValue: item.details
                }))}
                detailsExpr={'title'}
                labelExpr={'actualValue'}
            />

            <DescriptionItemsGrid
                orientation={'horizontal'}
                items={customerDetails.map((item) => ({
                    title: item.label,
                    actualValue: item.details
                }))}
                detailsExpr={'title'}
                labelExpr={'actualValue'}
                labelAlign={'right'}
            />

            <DescriptionItemsGrid
                orientation={'horizontal'}
                items={customerDetails.map((item) => ({
                    title: item.label,
                    actualValue: item.details
                }))}
                detailsExpr={'title'}
                labelExpr={'actualValue'}
                labelAlign={'right'}
                gap={'2rem 2rem'}
                labelWidth={'100px'}
                detailsWidth={'150px'}

            />

            <DescriptionItemsGrid
                items={customerDetails.map((item) => ({
                    title: item.label,
                    actualValue: item.details
                }))}
                detailsExpr={'title'}
                labelExpr={'actualValue'}
                gap={'2rem 2rem'}
                labelWidth={'100px'}
                detailsWidth={'150px'}

            />
        </div>
    )
}

export default App
