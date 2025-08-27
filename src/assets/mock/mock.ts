export const mockSidebars = [
    {
        id: 1,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        id: 2,
        label: "Products",
        children: [
            {
                id: 21,
                label: "Electronics",
                children: [
                    {
                        id: 211,
                        label: "Phones",
                        children: [
                            {
                                id: 2111,
                                label: "iPhone",
                                href: "/products/electronics/phones/iphone",
                            },
                            {
                                id: 2112,
                                label: "Samsung",
                                href: "/products/electronics/phones/samsung",
                            },
                        ],
                    },
                    {
                        id: 212,
                        label: "Laptops",
                        children: [
                            {
                                id: 2121,
                                label: "Macbook",
                                href: "/products/electronics/laptops/macbook",
                            },
                            {
                                id: 2122,
                                label: "Dell",
                                href: "/products/electronics/laptops/dell",
                            },
                        ],
                    },
                ],
            },
            {
                id: 22,
                label: "Fashion",
                children: [
                    {
                        id: 221,
                        label: "Men",
                        children: [
                            {
                                id: 2211,
                                label: "Shirts",
                                href: "/products/fashion/men/shirts",
                            },
                            {
                                id: 2212,
                                label: "Shoes",
                                href: "/products/fashion/men/shoes",
                            },
                        ],
                    },
                    {
                        id: 222,
                        label: "Women",
                        children: [
                            {
                                id: 2221,
                                label: "Dresses",
                                href: "/products/fashion/women/dresses",
                            },
                            {
                                id: 2222,
                                label: "Handbags",
                                href: "/products/fashion/women/handbags",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "Settings",
        children: [
            {
                id: 31,
                label: "Profile",
                href: "/settings/profile",
            },
            {
                id: 32,
                label: "Security",
                children: [
                    {
                        id: 321,
                        label: "Password",
                        href: "/settings/security/password",
                    },
                    {
                        id: 322,
                        label: "2FA",
                        href: "/settings/security/2fa",
                    },
                ],
            },
        ],
    },
]

export const categories = [
    {
        href: "/products/data-acquisition/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-01%20%281%29.png",
        name: "Data Acquisition, Oscilloscopes, Memory Recorders",
    },
    {
        href: "/products/power-supply/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-02.png",
        name: "Power Supplies, AC/DC Sources",
    },
    {
        href: "/products/test-instruments/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-03.png",
        name: "Test Instruments, Analyzers",
    },
    {
        href: "/products/sensors/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-04.png",
        name: "Sensors and Probes",
    },
    {
        href: "/products/electrochemical/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-05.png",
        name: "Electrochemical Analyzers",
    },
    {
        href: "/products/data-loggers/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-06.png",
        name: "Data Loggers and Recorders",
    },
    {
        href: "/products/oscilloscopes/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-07.png",
        name: "Oscilloscopes",
    },
    {
        href: "/products/memory-recorders/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-08.png",
        name: "Memory Recorders",
    },
    {
        href: "/products/acquisition-devices/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-09.png",
        name: "Acquisition Devices",
    },
    {
        href: "/products/power-analyzers/",
        img: "https://www.hioki.com/sites/default/files/2021-03/index-img-10.png",
        name: "Power Analyzers",
    },
];

export const mockProducts = [
    {
        id: 1,
        name: "MEMORY HiCORDER MR8848",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2025-04/mr8848_img_main01.png",
        features: [
            "Operation testing and evaluation of inverters and UPS during load fluctuation and switching",
            "Analyze the relationship between engine control and vibration during vibration testing",
            "Identify power fluctuations when power supply is cycled"
        ]
    },
    {
        id: 2,
        name: "ALDAS-Mini : ELECTROLYSIS CELL ANALYZER",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2025-01/aldas-mini_main_visual_img.jpg",
        features: [
            "For R&D, analysis of electrolysis cells",
            "Wide compatibility: supports electrolysis cell types including PEM, SOEC, AEM, AWE, etc."
        ]
    },
    {
        id: 3,
        name: "AC/DC CURRENT PROBE CT6833, CT6833‑01",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2024-12/CT6833_main01_img.png",
        features: [
            "For vehicle power testing",
            "Compliant with WLTP & SAE J1634 Standards"
        ]
    },
    {
        id: 4,
        name: "AC/DC CURRENT PROBE CT6834, CT6834‑01",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2024-12/CT6833_main01_img.png",
        features: [
            "For vehicle power testing",
            "Compliant with WLTP & SAE J1634 Standards"
        ]
    },
    {
        id: 5,
        name: "MEMORY HiCORDER MR8849",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2025-04/mr8848_img_main01.png",
        features: [
            "High-speed measurement for R&D",
            "Compact and portable",
            "User-friendly interface"
        ]
    },
    {
        id: 6,
        name: "ALDAS-Mini Plus : CELL ANALYZER",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2025-01/aldas-mini_main_visual_img.jpg",
        features: [
            "Enhanced accuracy for electrolysis analysis",
            "Supports multiple cell types",
            "Easy integration with lab systems"
        ]
    },
    {
        id: 7,
        name: "AC/DC CURRENT PROBE CT6835, CT6835‑01",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2024-12/CT6833_main01_img.png",
        features: [
            "Vehicle power monitoring",
            "Meets international standards"
        ]
    },
    {
        id: 8,
        name: "AC/DC CURRENT PROBE CT6836, CT6836‑01",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2024-12/CT6833_main01_img.png",
        features: [
            "Automotive testing",
            "High precision measurement"
        ]
    },
    {
        id: 9,
        name: "MEMORY HiCORDER MR8850",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2025-04/mr8848_img_main01.png",
        features: [
            "Advanced signal capturing",
            "Compact size",
            "Reliable performance"
        ]
    },
    {
        id: 10,
        name: "ALDAS-Mini Advanced : ELECTROLYSIS ANALYZER",
        link: "/products/data-acquisition/daq-testing/product-detail",
        img: "https://www.hioki.com/system/files/image/2025-01/aldas-mini_main_visual_img.jpg",
        features: [
            "Full cell analysis suite",
            "Supports all electrolysis types",
            "Optimized for R&D labs"
        ]
    }
];