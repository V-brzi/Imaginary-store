const inputs = [
    {
        id: 1,
        placeholder:"Cardholder name",
        name: "cardHolder",
        label: "Cardholder name: ",
        type: "text",
        errorMessage: "Name is required",
        pattern: "^[a-zA-Z ]{3,25}$",
        required: true
    },
    {
        id: 2,
        placeholder:"Card number",
        name: "cardNumber",
        label: "Card number: ",
        type: "text",
        errorMessage: "Card number should include 16 digits",
        pattern: "^[0-9]{16}$",
        required: true
    },
    {
        id: 3,
        placeholder:"Exp. date MM/YY",
        name: "expDateMMYY",
        label: "Exp. date MM/YY: ",
        type: "text",
        errorMessage: "Should be MM/YY exactly",
        pattern: "^(0[1-9]|1[0-2])\/?([0-9]{2})$",
        required: true
    },
    {
        id: 4,
        placeholder:"CVC",
        name: "cvc",
        label: "CVC: ",
        type: "text",
        errorMessage: "Should be 3 or 4 digits located at the back of the card",
        pattern: "^[0-9]{3,4}$",
        required: true
    }
]

export default inputs