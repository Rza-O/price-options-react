import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "1 guest pass per month",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "5 guest passes per month",
                "Locker room access",
                "Access to group fitness classes",
                "Free personal training session (1 per month)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
                "Access to all gym equipment",
                "Unlimited guest passes",
                "Locker room and shower access",
                "Unlimited group fitness classes",
                "Monthly personal training sessions",
                "Access to sauna and steam room",
                "Priority booking for classes and events"
            ]
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "price": 129.99,
            "features": [
                "24/7 access to all gym facilities",
                "Unlimited guest passes",
                "Dedicated locker and laundry service",
                "Locker room, showers, and spa access",
                "Unlimited group and specialty fitness classes",
                "Weekly personal training sessions",
                "Access to VIP lounge and refreshments",
                "Discounts on products and services",
                "Free parking and priority access"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices In Town</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    priceOptions.map((option)=> <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;