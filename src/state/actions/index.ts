interface DepositAction  {
    type: "deposit"
    payload: number
    }
    
    interface WithdrawAction { // interface contiene la definición de métodos y propiedades, no su implementación.
        type: "withdraw"
        payload: number
    }
    
    interface BankruptAction {
        type: "bankrupt"
    }

export type Action = DepositAction | WithdrawAction | BankruptAction