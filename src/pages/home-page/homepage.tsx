import  {  useEffect } from "react";
import "../../common/common-styles.styles.scss";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import "../../common/common-styles.styles.scss";

export const Homepage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user =>
			dispatch({ type: userActionTypes.SET_USER, payload: user }),
		);

		return unsubscribe;
	}, []);

	return (
		<div className=" h-100 container">
			<div className="row">
				<h1>Drawing perspective</h1>
			</div>
			<div className=" d-flex justify-content-center">
				Wasuup
			</div>
		</div>
	);
};
