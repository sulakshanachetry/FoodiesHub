import {Table} from "../../Components";


const Offers = () => {
    const data=[
        {
          "type": "Bachelor Combo",
          "dishes": 
            "Tandoori Roti(2), Chilli Fish(1/2), Chicken Masala(1/2), Egg Masala(1)",
          "price": "Rs 290",
        },
        {
            "type": "Bachelor Combo",
            "dishes": "Schz Chicken Fr Rice(1), Butter Chicken(1/2), Black Pep Chicken(1/2), Chilli Egg(1)",
            "price": "Rs 350",
        },
        {
            "type": "Family Combo(Veg)",
            "dishes": "Mushroom Fr Rice(2), Paneer Pulao(2), Gobi 65(2), Paneer Manchurian(2)",
            "price": "Rs 350",
        },
        {
            "type": "Family Combo(non-veg)",
            "dishes": "Tandoori Chicken(2), Butter Naan(3), Chicken Tikka Masala(2), Chicken Fr Rice(2)",
            "price": "Rs 390",
        },
        {
            "type": "Starter Combo",
            "dishes": "Pepper BBQ(1), Mutton BBQ(1), Black Pep Chicken(1), Gobi 65(1)",
            "price": "Rs 340",
        },
        {
            "type": "Tandoori Combo",
            "dishes": "Roti(4), Naan (2), Hariyaali Tikka(2), Butter Chicken Masala(1), Paneer Butter Masala",
            "price": "Rs 410",
        },
        
      ]
      
    return ( 
        <div className="Offers">
            <Table box={data}/>
        </div>
     );
}
 
export default Offers;