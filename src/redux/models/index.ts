import {Address} from 'expo-location'


//categories
export interface Category{
    title: String,
    icon: String
}

//food model 
export interface FoodModel{
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    readyTime: number;
    image: [string];
}
//Restaurant Model
export interface Restaurant{
    _id: string;
    name: string;
    foodType: string;
    address: string;
    phone: string;
    images: string;
    foods:[FoodModel];
}

export interface FoodAvailability{
    categories:[Category];
    restaurants: [Restaurant];
    foods:[FoodModel];
}

//TODO:
export interface UserModel{
    firstName: string;
    lastName: string;
    contactNumber: string;
    token: string;
} 

export interface UserState{
    user: UserModel;
    location: Address;
    error: string | undefined;
}