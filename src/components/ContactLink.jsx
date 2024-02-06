import { Link } from "react-router-dom";
import contact from "../assets/icons/contact.svg";

const ContactLink = () => {
	return (
		<section className="contactLink">
			<Link key="Contact" to="/contact">
				<img
					src={contact}
					alt="Contact"
					className="w-6 h-6 object-contain"
				/>
			</Link>
		</section>
	);
};

export default ContactLink;
