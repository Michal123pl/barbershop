import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../ElementsStyles/ContactInfo.css';

class ContactInfo extends React.Component {
	render() {
		return(
			<div className='contactinfo'>
				<section id='infosectionfirst'>
					<div>
						<p> Chcesz  o coś dopytać? </p>
						<p> Potrzebujesz specjalej usługi? </p>
						<p> Masz pomysł na współpracę? </p>
						<p> Odezwij się! </p>
					</div>
					<div>
{/*						<form className='form'>
							<input type="text" placeholder="Podaj swoje imię"/>
							<input type="tel" placeholder="Podaj numer telefonu" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
							<input type="text" placeholder="Co Cię gryzie?" id='desc'/>
							<input type="submit" value="Wyślij"/>
						</form>
*/}						</div> 
				</section>
			<section id='infosectionsecond'>
					<div>
						<p> 123-456-789 </p>
						<p> mail@mail.pl </p>
						<p> adres 00-000 </p>
						<p> ul. ulica 10/2 </p>
					</div>
					<div>
						<iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=wroc%C5%82aw%20kabaczkowa%207&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
					</div>
				</section>		
			</div>
	)}
}

export default ContactInfo;