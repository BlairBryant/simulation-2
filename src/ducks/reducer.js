const initialState = {
    username: '',
    password: '',
    propertyName: '',
    propertyDesc: '',
    address: '',
    city: '',
    stateOf: '',
    zip: '',
    imageurl: '',
    loanAmount: '',
    monthlyMortgage: '',
    desiredRent: '',
}

const TYPING_USERNAME = "TYPING_USERNAME",
      TYPING_PASSWORD = "TYPING_PASSWORD",
      TYPING_PROPERTY_NAME = "TYPING_PROPERTY_NAME",
      TYPING_PROPERTY_DESC = "TYPING_PROPERTY_DESC",
      T_ADDRESS = "T_ADDRESS",
      T_CITY = "T_CITY",
      T_STATEOF = "T_STATEOF",
      T_ZIP = "T_ZIP",
      T_IMAGEURL = "T_IMAGEURL",
      T_LOAN_AMOUNT = "T_LOAN_AMOUNT",
      T_MONTHLY_MORTGAGE = "T_MONTHLY_MORTGAGE",
      T_DESIRED_RENT = "T_DESIRED_RENT"



function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPING_USERNAME:
            return Object.assign({}, state, {username: action.payload})

        case TYPING_PASSWORD:
            return Object.assign({}, state, {password: action.payload})
        
        case TYPING_PROPERTY_NAME:
            return Object.assign({}, state, {propertyName: action.payload})

        case TYPING_PROPERTY_DESC:
            return Object.assign({}, state, {propertyDesc: action.payload})

        case T_ADDRESS:
            return Object.assign({}, state, {address: action.payload})

        case T_CITY:
            return Object.assign({}, state, {city: action.payload})

        case T_STATEOF:
            return Object.assign({}, state, {stateOf: action.payload})

        case T_ZIP:
            return Object.assign({}, state, {zip: action.payload})

        case T_IMAGEURL:
            return Object.assign({}, state, {imageurl: action.payload})

        case T_LOAN_AMOUNT:
            return Object.assign({}, state, {loanAmount: action.payload})
        
        case T_MONTHLY_MORTGAGE:
            return Object.assign({}, state, {monthlyMortgage: action.payload})
        
        case T_DESIRED_RENT:
            return Object.assign({}, state, {desiredRent: action.payload})


    default: return state
    }
}

export function typingUsername(username) {
    return {
        type: TYPING_USERNAME,
        payload: username
    }
}

export function typingPassword(p) {
    return {
        type: TYPING_PASSWORD,
        payload: p
    }
}

//-------------------------------------------------------

export function typingPropertyName(n) {
    return {
        type: TYPING_PROPERTY_NAME,
        payload: n
    }
}

export function typingPropertyDesc(d) {
    return {
        type: TYPING_PROPERTY_DESC,
        payload: d
    }
}

//-----------------------------------------------------

export function tAddress(a) {
    return {
        type: T_ADDRESS,
        payload: a
    }
}

export function tCity(c) {
    return {
        type: T_CITY,
        payload: c
    }
}

export function tStateOf(s) {
    return {
        type: T_STATEOF,
        payload: s
    }
}

export function tZip(z) {
    return {
        type: T_ZIP,
        payload: z
    }
}

//------------------------------------------

export function tImageurl(i) {
    return {
        type: T_IMAGEURL,
        payload: i
    }
}

//----------------------------------------------

export function tLoanAmount(l) {
    return {
        type: T_LOAN_AMOUNT,
        payload: l
    }
}

export function tMonthlyMortgage(m) {
    return {
        type: T_MONTHLY_MORTGAGE,
        payload: m
    }
}

//----------------------------------------------

export function tDesiredRent(d) {
    return {
        type: T_DESIRED_RENT,
        payload: d    
    }
}


export default reducer