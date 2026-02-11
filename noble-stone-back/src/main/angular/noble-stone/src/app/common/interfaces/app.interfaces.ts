export interface item {
    id: number,
    itemName: string,
    itemCategory: string,
    itemSubCategory: string,
    itemPrice: number,
    itemList: string [],
    itemDescription?: string
}

export interface quote {
    id?: number;
    action?: boolean;
    date?: Date ,
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    message?: string;
    items?: item[]
}

export interface todo {
    id: number;
    usernameId: number;
    todoTitle: string;
    todoDescription: string;
    done:boolean;
}

export interface user {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    role?: string
}

export const QUOTECHECKOUT: quote = {
        id: 11,
        action: false,
        date: new Date(),
        name: "Tumelo",
        surname: "Khoza",
        email: "tumelokhoza3@gmail.com",
        phone: "0743266547",
        message: "Dear team, I Hope this message find you well. I would like to book a service for photoshot on the specified special",
        items: [{
            id: 1,
            itemName: "Corporate Identity Pack 1",
            itemCategory: "graphics",
            itemSubCategory: "Corporate Identity Designs",
            itemPrice: 3160,
            itemList: [
                "X2 Unique Options",
                "X1 Final Logo Design",
                "Business Card Design",
                "Letterhead Design",
                "Email Signature Design",
                "2 Revision Rounds"
            ]
        }, {
            id: 11,
            itemName: "Company Profile",
            itemCategory: "graphics",
            itemSubCategory: "Print & Digital Media Designs",
            itemPrice: 6150,
            itemList: [
                "X2 Unique Options",
                "X1 Final Concept",
                "Concept Printable Files Supplied",
                "2 Revision Rounds"
            ]
        },{
            id: 22,
            itemName: "3 Page Custom Website",
            itemCategory: "website",
            itemSubCategory: "Website Design Prices & Packages",
            itemPrice: 5180,
            itemList: [
                "Domain Administration",
                "1 x Custom Design To Choose From",
                "2 x Free Design Revision Rounds",
                "2 x Free Content Revision Rounds",
                "3 x Static Pages",
                "Fully Mobile Responsive",
                "Google Friendly (SEO)",
                "Enquiry Form",
                "Google Map",
                "Moving Banner",
                "Pop Up Image Gallery",
                "Video Gallery",
                "WhatsApp Quick Chat",
                "Social Media Buttons",
                "Basic SEO & Google Index",
                "Manage Own Content",
                "Website Editing Training",
                "Standard Scroll Animations",
            ]
        }
    ]
}

export const QUOTES: quote[] = [QUOTECHECKOUT,
    {
        id: 12,
        action: true,
        date: new Date(),
        name: "Tumelo2",
        surname: "Khoza",
        email: "tumelokhoza3@gmail.com",
        phone: "0743266547",
        message: "Dear team, I Hope this message find you well. I would like to book a service for photoshot on the specified special",
        items: [{
            id: 1,
            itemName: "Corporate Identity Pack 1",
            itemCategory: "graphics",
            itemSubCategory: "Corporate Identity Designs",
            itemPrice: 3160,
            itemList: [
                "X2 Unique Options",
                "X1 Final Logo Design",
                "Business Card Design",
                "Letterhead Design",
                "Email Signature Design",
                "2 Revision Rounds"
            ]
        }, {
            id: 11,
            itemName: "Company Profile",
            itemCategory: "graphics",
            itemSubCategory: "Print & Digital Media Designs",
            itemPrice: 6150,
            itemList: [
                "X2 Unique Options",
                "X1 Final Concept",
                "Concept Printable Files Supplied",
                "2 Revision Rounds"
            ]
        },{
            id: 22,
            itemName: "3 Page Custom Website",
            itemCategory: "website",
            itemSubCategory: "Website Design Prices & Packages",
            itemPrice: 5180,
            itemList: [
                "Domain Administration",
                "1 x Custom Design To Choose From",
                "2 x Free Design Revision Rounds",
                "2 x Free Content Revision Rounds",
                "3 x Static Pages",
                "Fully Mobile Responsive",
                "Google Friendly (SEO)",
                "Enquiry Form",
                "Google Map",
                "Moving Banner",
                "Pop Up Image Gallery",
                "Video Gallery",
                "WhatsApp Quick Chat",
                "Social Media Buttons",
                "Basic SEO & Google Index",
                "Manage Own Content",
                "Website Editing Training",
                "Standard Scroll Animations",
            ]
        }
    ]
}

]


export const USERS: user[] =[
    {
        id: 1,
        name: "Tumelo",
        surname: "Khoza",
        email: "tumelokhoza@gmail.com",
        phone: "01243265",
        role: "ADMIN" 
    },{
        id: 2,
        name: "Muzi",
        surname: "Dlamini",
        email: "tumelokhoza@gmail.com",
        phone: "01243265",
        role: "USER" 
    }
]

export const TODOS: todo[] =[{
        id: 1,
        usernameId: 12,
        todoTitle: "The first task",
        todoDescription: "Whatever the discription im just typing",
        done: false,
    },{
        id: 2,
        usernameId: 12,
        todoTitle: "The Second task",
        todoDescription: "Whatever the discription im just typing",
        done: true,
    }
]

export const GRAPHICITEMS: item [] =[{
        id: 1,
        itemName: "Corporate Identity Pack 1",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 3160,
        itemList: [
            "X2 Unique Options",
            "X1 Final Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Email Signature Design",
            "2 Revision Rounds"
        ]
    },
    {
        id: 2,
        itemName: "Corporate Identity Pack 2",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 4080,
        itemList: [
            "X4 Unique Options",
            "X1 Final Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Email Signature Design",
            "2 Revision Rounds"
        ]
    },
    {
        id: 3,
        itemName: "Corporate Identity Pack 3",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 5410,
        itemList: [
            "X6 Unique Options",
            "X1 Final Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Email Signature Design",
            "2 Revision Rounds"
        ]
    },
    {
        id: 4,
        itemName: "Logo Design (2 x Options)",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 1080,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Business Card Design",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 5,
        itemName: "Logo Design (4 x Options)",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 2120,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Business Card Design",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 6,
        itemName: "Logo Design (6 x Options)",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 3160,
        itemList: [
            "X6 Unique Options",
            "X1 Final Concept",
            "Business Card Design",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 7,
        itemName: "Logo Redraw",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 1000,
        itemList: [
            "Existing Logo Redraw",
            "X1 Final Concept",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 8,
        itemName: "Business Card Design",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 1050,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 9,
        itemName: "Letterhead Design",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 1150,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 10,
        itemName: "Email Signature | Static",
        itemCategory: "graphics",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 1150,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Signature is a static image",
            "Only clickable to 1 link"
        ]
    },

    // sub 2
    {
        id: 11,
        itemName: "Company Profile",
        itemCategory: "graphics",
        itemSubCategory: "Print & Digital Media Designs",
        itemPrice: 6150,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Concept Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 12,
        itemName: "Poster Design A4-A0",
        itemCategory: "graphics",
        itemSubCategory: "Print & Digital Media Designs",
        itemPrice: 1250,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    },
    {
        id: 13,
        itemName: "Flyer Design A6-A4",
        itemCategory: "graphics",
        itemSubCategory: "Print & Digital Media Designs",
        itemPrice: 680,
        itemList: [
            "X2 Unique Options",
            "X1 Final Concept",
            "Printable Files Supplied",
            "2 Revision Rounds"
        ]
    }
]


export const WEBSTIEiTEMS: item [] =[{
        id: 21,
        itemName: "Business Card Web Page",
        itemCategory: "website",
        itemSubCategory: "Website Design Prices & Packages",
        itemPrice: 1260,
        itemList: [
            "Domain Administration",
            "Upload of Business Card",
            "Excludes Business Card Design (if not in place)",
            "Full HD Size",
            "Resolution 1920 x 1080",
            "1 x Screen Fold in Length",
            "Image will resize to any screen size",
            "Not Fully Responsive Image only resizes",
            "No Add On can be added",
            "Perfect Interim Place Holder",
            "Add Business Card Design 960",
            "Or we can just load Logo & Contact Details",
        ]
    },{
        id: 22,
        itemName: "3 Page Custom Website",
        itemCategory: "website",
        itemSubCategory: "Website Design Prices & Packages",
        itemPrice: 5180,
        itemList: [
            "Domain Administration",
            "1 x Custom Design To Choose From",
            "2 x Free Design Revision Rounds",
            "2 x Free Content Revision Rounds",
            "3 x Static Pages",
            "Fully Mobile Responsive",
            "Google Friendly (SEO)",
            "Enquiry Form",
            "Google Map",
            "Moving Banner",
            "Pop Up Image Gallery",
            "Video Gallery",
            "WhatsApp Quick Chat",
            "Social Media Buttons",
            "Basic SEO & Google Index",
            "Manage Own Content",
            "Website Editing Training",
            "Standard Scroll Animations",
        ]
    },{
        id: 23,
        itemName: "6 Page Custom Website",
        itemCategory: "website",
        itemSubCategory: "Website Design Prices & Packages",
        itemPrice: 7410,
        itemList: [
            "Domain Administration",
            "1 x Custom Design To Choose From",
            "2 x Free Design Revision Rounds",
            "2 x Free Content Revision Rounds",
            "6 x Static Pages",
            "Fully Mobile Responsive",
            "Google Friendly (SEO)",
            "Enquiry Form",
            "Google Map",
            "Moving Banner",
            "Pop Up Image Gallery",
            "Video Gallery",
            "WhatsApp Quick Chat",
            "Social Media Buttons",
            "Basic SEO & Google Index",
            "Manage Own Content",
            "Website Editing Training",
            "Standard Scroll Animations",
        ]
    },{
        id: 24,
        itemName: "Catalog Website",
        itemCategory: "website",
        itemSubCategory: "Website Design Prices & Packages",
        itemPrice: 14800,
        itemList: [
            "Domain Administration",
            "Catalog Website",
            "Perfect to display products without interaction",
            "Includes Enquiry Form per Product",
            "Custom Designed Template",
            "2 x Designs To Choose From",
            "2 x Free Design Revision Rounds",
            "2 x Free Content Revision Rounds",
            "Google Friendly (SEO)",
            "Fully Mobile Responsive",
            "Moving Product Banner",
            "Enquiry About Product",
            "Product Categories",
            "9 x Products Preloaded Free",
            "Add Unlimited Products",
            "Product Image & Video Gallery",
            "PDF Downloads",
            "Enquiry Form",
            "WhatsApp Quick Chat System",
            "Mail Chimp Newsletter Integration",
            "Catalog Content Update Training",
            "Interactive Blog",
            "Image & Video Gallery",
            "3 x Static Content Pages",
            "Includes T/C Page",
            "Social Media Sharing",
            "Social Media Icons",
            "Standard Scroll Animations",
        ]
    },{
        id: 25,
        itemName: "Catalog Website With Quote Basket",
        itemCategory: "website",
        itemSubCategory: "Website Design Prices & Packages",
        itemPrice: 16120,
        itemList: [
            "Domain Administration",
            "Catalog Website",
            "Product Quotation Basket System",
            "Book products out like eCommerce without Payment Portal",
            "Perfect for preorder, import or large products that needs interaction in Sale Process",
            "Custom Designed Template",
            "2 x Designs To Choose From",
            "2 x Free Design Revision Rounds",
            "2 x Free Content Revision Rounds",
            "Google Friendly (SEO)",
            "Fully Mobile Responsive",
            "Moving Product Banner",
            "Enquire About Products",
            "Add Products to Quote Basket",
            "Product Categories",
            "Products with Descriptions",
            "9 x Products Preloaded Free",
            "Add Unlimited Products",
            "Product Image & Video Gallery",
            "PDF Downloads",
            "Enquiry Form",
            "WhatsApp Quick C",
            "hat System",
            "Mail Chimp Newsletter Integration",
            "Catalog Content Update Training",
            "Interactive Blog",
            "Image & Video Gallery",
            "3 x Static Content Pages",
            "Extra T/C Page",
            "Social Media Sharing",
            "Social Media Icons",
            "Standard Scroll Animations",
        ]
    },{
        id: 26,
        itemName: "System / Custom Website Design",
        itemCategory: "website",
        itemSubCategory: "Website Design Prices & Packages",
        itemPrice: 16120,
        itemList: [
            "Any Custom Website",
            "Quote System Website",
            "LMS Website",
            "Events RSVP Website",
            "Item/Product Rental Website",
            "Property/Holiday Rental Website",
            "Personal Blog Website",
            "Holiday Booking Website",
            "Training Booking Website",
            "Appointment Booking Website",
            "Donation Website",
            "Crowd Funding Website",
            "Business Directory Website",
            "Catalog Website",
            "Auction Website Classifieds Website",
            "Many More",
        ]
    },
]





export const PHOTOGRAPHUITEMS: item [] =[{
        id: 31,
        itemName: "Studio Hour",
        itemCategory: "photography",
        itemSubCategory: "Studio Sessions",
        itemPrice: 1500,
        itemList: [
            "60min session in studio",
            "Max 2 people & 1 under 4's",
            "R300 per extra person",
            "30 images",
        ]
    },{
        id: 32,
        itemName: "45 Special",
        itemCategory: "photography",
        itemSubCategory: "Studio Sessions",
        itemPrice: 2000,
        itemList: [
            "45min session in studio",
            "Max 2 people & 1 under 4's",
            "R300 per extra person",
            "20 images",
        ]
    },{
        id: 33,
        itemName: "Mini Studio",
        itemCategory: "photography",
        itemSubCategory: "Studio Sessions",
        itemPrice: 1600,
        itemList: [
            "30min session in studio",
            "Max 2 people",
            "R300 per extra person",
            "12 images",
        ]
    },{
        id: 34,
        itemName: "Profile Express",
        itemCategory: "photography",
        itemSubCategory: "Studio Sessions",
        itemPrice: 800,
        itemList: [
            "15min session in studio",
            "1 person only (R200pp extra)",
            "Custom color b/drop: R20/pic",
            "5 images",
        ]
    },{
        id: 35,
        itemName: "Headshot",
        itemCategory: "photography",
        itemSubCategory: "Studio Sessions",
        itemPrice: 400,
        itemList: [
            "10min session in studio",
            "Black, grey or white backdrop",
            "Custom color b/drop: R20/pic",
            "1 Person only",
            "2 hi-res photos by email",
        ]
    },{
        id: 36,
        itemName: "Family in Studio",
        itemCategory: "photography",
        itemSubCategory: "Studio Sessions",
        itemPrice: 3000,
        itemList: [
            "Up to 90min session in studio",
            "Max 5 people, under 4's free",
            "R300 per extra person",
            "50 images",
            "30 day free online gallery",
        ]
    },

    {
        id: 37,
        itemName: "Outdoor Ultimate",
        itemCategory: "photography",
        itemSubCategory: "On location",
        itemPrice: 5500,
        itemList: [
            "90min session on location",
            "Max 5 people, under 4's free",
            "R300 per extra person",
            "70 images",
            "1 x  photobook Or A1 canvas",
        ]
    },{
        id: 38,
        itemName: "Family Hour",
        itemCategory: "photography",
        itemSubCategory: "On location",
        itemPrice: 4000,
        itemList: [
            "60min session on location",
            "Max 5 people, under 4's free",
            "R300 per extra person",
            "50 images",
            "Optional: A4 album/A1Canvas ",
        ]
    },{
        id: 39,
        itemName: "Outdoor Hour",
        itemCategory: "photography",
        itemSubCategory: "On location",
        itemPrice: 4000,
        itemList: [
            "60min session on location",
            "Max 2 people, 1 under 4's free",
            "R300 per extra person",
            "30 images",
            "Optional: A4 album/A1Canvas ",
        ]
    },{
        id: 40,
        itemName: "Leather Books",
        itemCategory: "photography",
        itemSubCategory: "photobook",
        itemPrice: 4000,
        itemDescription: "Genuine Leather cover,  Re-enforced layflat pages (thick pages), black or brown leather. Includes linen box - STUNNING!",
        itemList: [
            "30cmX30cm -  R6500  40 pages",
            "30cmX30cm -  R5600  30 pages",
            "30cmX30cm -  R4200  20 pages",
            "A4: 20X30cm - R5000  40 pages",
            "A4: 20X30cm - R4700  30 pages",
            "A4:20X30cm  - R3700  20 pages ",
            "20cmX20cm  - R2200  20 pages",
            "Guestbook 15X20cm (10 pages) - R1700",
        ]
    },{
        id: 41,
        itemName: "Printed Hardcover Books",
        itemCategory: "photography",
        itemSubCategory: "photobook",
        itemPrice: 4000,
        itemDescription: "Printed Hardcover, 24 pages, matt/gloss/linen finish",
        itemList: [
            "A4 Portrait/Landscape Layflat      - R2400",
            "30cm X 30cm Layflat  - 24 pages  - R2800",
            "30cm X 30cm Layflat  - 32 pages  - R3500",
            "30cm X 30cm Layflat  - 40 pages  - R4200",
            
            
        ]
    },
    {
        id: 42,
        itemName: "Event Photography",
        itemCategory: "photography",
        itemSubCategory: "Event Photography",
        itemPrice: 1200,
        itemDescription: "This is the price for photography services for the whole event. It includes event coverage at your location, image editing, and digital image files. The price depends on the type of event (private or corporate), your location and the photographer's expertise and experience. Additional costs may apply for travel time, prints, full rights to the images, etc. For event photography.",
        itemList: [
            "3 Hours of Photography",
            "Ceremony & Signing",
            "All Guests",
            "Min 50 photos",
            
            
        ]
    },
    {
        id: 43,
        itemName: "Wedding",
        itemCategory: "photography",
        itemSubCategory: "Base Photography Package",
        itemPrice: 3500,
        itemDescription: "We specialise in small and intimate weddings where our time on location ranges from 3 to 5 hours. The Base Package is our smallest, but you can build up your photography requirements from the Photography Extras list below. You will receive High resolution (for printing) + Low resolution (for social media) photos. You should get roughly 50 photos for every hour booked.",
        itemList: [
            "3 Hours of Photography",
            "Ceremony & Signing",
            "Couple Shoot",
            "Cake Cutting",
            "Reception & Venue Decor",
            "All Guests",
            "Min 150 photos",
            
            
        ]
    },
]

export const videographyItems: item [] =[{
        id: 51,
        itemName: "Event",
        itemCategory: "videography",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 2000,
        itemList: [
            "X2 Unique Options",
            "X1 Final Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Email Signature Design",
            "2 Revision Rounds"
        ]
    },{
        id: 52,
        itemName: "Podcast",
        itemCategory: "videography",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 3160,
        itemList: [
            "X2 Unique Options",
            "X1 Final Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Email Signature Design",
            "2 Revision Rounds"
        ]
    },{
        id: 53,
        itemName: "Music Video",
        itemCategory: "videography",
        itemSubCategory: "Corporate Identity Designs",
        itemPrice: 3160,
        itemList: [
            "X2 Unique Options",
            "X1 Final Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Email Signature Design",
            "2 Revision Rounds"
        ]
    },
]