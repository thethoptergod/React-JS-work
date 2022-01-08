import contacts from '../data/contact.json'
import Contact from './Contact'
function Main(){
    return(
        <div>
            {contacts.map((contact, index) =>{
                return<Contact contact={contact} key={index} />
            })}
        </div>
    )
}
export default Main;