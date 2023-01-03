export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  bank: any;
  banks?: BankTypes[];
  change: () => void;
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
  change: () => void;
}

export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface SignUpTypes {
  name: string;
  email: string;
  image: string;
  password: string;
  // favorite: string;
  // phoneNumber: number;
  // role: string;
  // status: string;
}

export interface SignInTypes {
  email: string;
  password: string;
}

export interface CallAPITypes {
  url: string;
  method: string;
  data: any;
}

export interface PayloadTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  image: string;
}

export interface JWTPayloadTypes {
  player: PayloadTypes;
}

export interface CheckoutDataTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryTransactionTypes {
  title: string;
  category: { _id: string; name: string };
  historyPayment: {
    name: string;
    type: string;
    bankName: string;
    noRekening: string;
  };
  historyVoucherTopup: {
    category: string;
    coinName: string;
    coinQuantity: string;
    price: number;
  };
  status: string;
  value: number;
  _id: string;
  tax: number;
  name: string;
  accountUser: string;
}

export interface CountPriceTransactionTypes {
  category: {
    name: string;
  };
  name: string;
  _id: string;
  value: number;
}
