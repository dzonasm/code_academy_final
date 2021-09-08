import firebase from 'firebase/app';

export interface coordinateDot {
	id: string;
	coordx: number;
	coordy: number;
}
export interface userReducerState {
	currentUser: firebase.User | null;
}

//newItemType
export interface coordinateArray {
	coordinates: coordinateDot[];
}

//types of
export const ADD_COORDINATE = "ADD_COORDINATE";
export const REMOVE_COORDINATE = "REMOVE_COORDINATE";

export enum userActionTypes {
	SET_USER = "SET_USER",
}

export type userReducerAction = {
	type: typeof userActionTypes.SET_USER;
	payload: firebase.User;
};

export type coordinateReducerAction = {
	type: typeof ADD_COORDINATE | typeof REMOVE_COORDINATE;
	payload: coordinateDot | { id: string };
};
