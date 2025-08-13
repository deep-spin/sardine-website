// Complete country database with coordinates and colors
// Add this to your data folder as data/countries.js

const COUNTRY_DATABASE = {
    // Colors for countries (automatically assigned from a curated palette)
    colors: {
        // Europe
        'Albania': '#0f766e',     // Teal-700
        'Austria': '#6366f1',     // Indigo
        'Belarus': '#14532d',     // Green-800
        'Belgium': '#ec4899',     // Pink
        'Bosnia and Herzegovina': '#059669', // Emerald-700
        'Bulgaria': '#9333ea',    // Purple-600
        'Croatia': '#d97706',     // Amber-600
        'Cyprus': '#9f1239',      // Rose-800
        'Czech Republic': '#ea580c', // Orange-600
        'Denmark': '#14b8a6',     // Teal
        'Estonia': '#15803d',     // Green-700
        'Finland': '#a855f7',     // Violet
        'France': '#3b82f6',      // Blue
        'Germany': '#8b5cf6',     // Purple
        'Greece': '#0891b2',      // Cyan-600
        'Hungary': '#2563eb',     // Blue-600
        'Iceland': '#be185d',     // Pink-700
        'Ireland': '#b45309',     // Amber-700
        'Italy': '#22c55e',       // Green
        'Latvia': '#7c3aed',      // Purple-700
        'Lithuania': '#0e7490',   // Cyan-700
        'Luxembourg': '#155e75',  // Cyan-800
        'Malta': '#92400e',       // Amber-800
        'Moldova': '#7c2d12',     // Orange-800
        'Montenegro': '#4338ca',  // Indigo-700
        'Netherlands': '#f59e0b',  // Amber
        'North Macedonia': '#be123c', // Rose-700
        'Norway': '#f43f5e',      // Rose
        'Poland': '#dc2626',      // Red-600
        'Portugal': '#ef4444',     // Red
        'Romania': '#16a34a',     // Green-600
        'Russia': '#581c87',      // Purple-800
        'Serbia': '#65a30d',      // Lime-700
        'Slovakia': '#1d4ed8',    // Blue-700
        'Slovenia': '#c2410c',    // Orange-700
        'Spain': '#f97316',       // Orange
        'Sweden': '#10b981',      // Emerald
        'Switzerland': '#84cc16', // Lime
        'Ukraine': '#1e3a8a',     // Blue-800
        'United Kingdom': '#06b6d4', // Cyan
        
        // Asia
        'Afghanistan': '#ea580c', // Orange-600
        'Armenia': '#be123c',     // Rose-700
        'Azerbaijan': '#7c2d12',  // Orange-800
        'Bahrain': '#059669',     // Emerald-700
        'Bangladesh': '#a855f7',  // Violet
        'Bhutan': '#0e7490',      // Cyan-700
        'Cambodia': '#f43f5e',    // Rose
        'China': '#ef4444',       // Red
        'Georgia': '#0f766e',     // Teal-700
        'India': '#22c55e',       // Green
        'Indonesia': '#8b5cf6',   // Purple
        'Iran': '#2563eb',        // Blue-600
        'Iraq': '#16a34a',        // Green-600
        'Israel': '#1d4ed8',      // Blue-700
        'Japan': '#f97316',       // Orange
        'Jordan': '#c2410c',      // Orange-700
        'Kazakhstan': '#1e3a8a',  // Blue-800
        'Kuwait': '#4338ca',      // Indigo-700
        'Kyrgyzstan': '#581c87',  // Purple-800
        'Laos': '#14b8a6',        // Teal
        'Lebanon': '#d97706',     // Amber-600
        'Malaysia': '#84cc16',    // Lime
        'Maldives': '#be185d',    // Pink-700
        'Mongolia': '#9f1239',    // Rose-800
        'Myanmar': '#10b981',     // Emerald
        'Nepal': '#7c3aed',       // Purple-700
        'North Korea': '#166534', // Green-600 dark
        'Oman': '#b45309',        // Amber-700
        'Pakistan': '#dc2626',    // Red-600
        'Palestine': '#15803d',   // Green-700
        'Philippines': '#ec4899', // Pink
        'Qatar': '#65a30d',       // Lime-700
        'Saudi Arabia': '#7c3aed', // Purple-700
        'Singapore': '#6366f1',   // Indigo
        'South Korea': '#3b82f6', // Blue
        'Sri Lanka': '#b45309',   // Amber-700
        'Syria': '#0891b2',       // Cyan-600
        'Tajikistan': '#155e75',  // Cyan-800
        'Thailand': '#06b6d4',    // Cyan
        'Turkey': '#9333ea',      // Purple-600
        'Turkmenistan': '#92400e', // Amber-800
        'UAE': '#be185d',         // Pink-700
        'Uzbekistan': '#14532d',  // Green-800
        'Vietnam': '#f59e0b',     // Amber
        'Yemen': '#0e7490',       // Cyan-700
        
        // Africa
        'Algeria': '#06b6d4',     // Cyan
        'Angola': '#9333ea',      // Purple-600
        'Benin': '#1e3a8a',       // Blue-800
        'Botswana': '#2563eb',    // Blue-600
        'Burkina Faso': '#7c3aed', // Purple-700
        'Burundi': '#0f766e',     // Teal-700
        'Cameroon': '#be185d',    // Pink-700
        'Cape Verde': '#9f1239',  // Rose-800
        'Central African Republic': '#65a30d', // Lime-700
        'Chad': '#b45309',        // Amber-700
        'Comoros': '#7c3aed',     // Purple-700
        'Democratic Republic of Congo': '#4338ca', // Indigo-700
        'Djibouti': '#b45309',    // Amber-700
        'Egypt': '#f97316',       // Orange
        'Equatorial Guinea': '#0f766e', // Teal-700
        'Eritrea': '#be185d',     // Pink-700
        'Ethiopia': '#6366f1',    // Indigo
        'Gabon': '#be123c',       // Rose-700
        'Gambia': '#92400e',      // Amber-800
        'Ghana': '#10b981',       // Emerald
        'Guinea': '#581c87',      // Purple-800
        'Guinea-Bissau': '#155e75', // Cyan-800
        'Ivory Coast': '#7c2d12', // Orange-800
        'Kenya': '#22c55e',       // Green
        'Lesotho': '#059669',     // Emerald-700
        'Liberia': '#1e3a8a',     // Blue-800
        'Libya': '#ec4899',       // Pink
        'Madagascar': '#d97706',  // Amber-600
        'Malawi': '#4338ca',      // Indigo-700
        'Mali': '#15803d',        // Green-700
        'Mauritius': '#c2410c',   // Orange-700
        'Morocco': '#8b5cf6',     // Purple
        'Mozambique': '#0891b2',  // Cyan-600
        'Namibia': '#16a34a',     // Green-600
        'Niger': '#0e7490',       // Cyan-700
        'Nigeria': '#3b82f6',     // Blue
        'Republic of Congo': '#059669', // Emerald-700
        'Rwanda': '#a855f7',      // Violet
        'Sao Tome and Principe': '#166534', // Green-600 dark
        'Senegal': '#1d4ed8',     // Blue-700
        'Seychelles': '#0e7490',  // Cyan-700
        'Sierra Leone': '#14532d', // Green-800
        'Somalia': '#65a30d',     // Lime-700
        'South Africa': '#ef4444', // Red
        'Sudan': '#84cc16',       // Lime
        'Swaziland': '#be123c',   // Rose-700
        'Tanzania': '#f43f5e',    // Rose
        'Togo': '#7c2d12',        // Orange-800
        'Tunisia': '#f59e0b',     // Amber
        'Uganda': '#14b8a6',      // Teal
        'Zambia': '#dc2626',      // Red-600
        'Zimbabwe': '#ea580c',    // Orange-600
        
        // Americas
        'Antigua and Barbuda': '#1e3a8a', // Blue-800
        'Argentina': '#8b5cf6',   // Purple
        'Bahamas': '#581c87',     // Purple-800
        'Barbados': '#4338ca',    // Indigo-700
        'Belize': '#1d4ed8',      // Blue-700
        'Bolivia': '#10b981',     // Emerald
        'Brazil': '#22c55e',      // Green
        'Canada': '#f97316',      // Orange
        'Chile': '#06b6d4',       // Cyan
        'Colombia': '#ec4899',    // Pink
        'Costa Rica': '#2563eb',  // Blue-600
        'Cuba': '#15803d',        // Green-700
        'Dominica': '#7c2d12',    // Orange-800
        'Dominican Republic': '#b45309', // Amber-700
        'Ecuador': '#6366f1',     // Indigo
        'El Salvador': '#d97706', // Amber-600
        'French Guiana': '#ea580c', // Orange-600
        'Grenada': '#059669',     // Emerald-700
        'Guatemala': '#c2410c',   // Orange-700
        'Guyana': '#a855f7',      // Violet
        'Haiti': '#0e7490',       // Cyan-700
        'Honduras': '#0891b2',    // Cyan-600
        'Jamaica': '#7c3aed',     // Purple-700
        'Mexico': '#3b82f6',      // Blue
        'Nicaragua': '#9333ea',   // Purple-600
        'Panama': '#16a34a',      // Green-600
        'Paraguay': '#f43f5e',    // Rose
        'Peru': '#f59e0b',        // Amber
        'Puerto Rico': '#be185d', // Pink-700
        'Saint Kitts and Nevis': '#14532d', // Green-800
        'Saint Lucia': '#0f766e', // Teal-700
        'Saint Vincent and the Grenadines': '#be123c', // Rose-700
        'Suriname': '#dc2626',    // Red-600
        'Trinidad and Tobago': '#65a30d', // Lime-700
        'United States': '#ef4444', // Red
        'Uruguay': '#14b8a6',     // Teal
        'Venezuela': '#84cc16',   // Lime
        
        // Oceania
        'Australia': '#ef4444',   // Red
        'Fiji': '#22c55e',        // Green
        'Kiribati': '#14b8a6',    // Teal
        'Marshall Islands': '#10b981', // Emerald
        'Micronesia': '#84cc16',  // Lime
        'Nauru': '#f43f5e',       // Rose
        'New Zealand': '#f97316', // Orange
        'Palau': '#6366f1',       // Indigo
        'Papua New Guinea': '#3b82f6', // Blue
        'Samoa': '#f59e0b',       // Amber
        'Solomon Islands': '#8b5cf6', // Purple
        'Tonga': '#ec4899',       // Pink
        'Tuvalu': '#a855f7',      // Violet
        'Vanuatu': '#06b6d4',     // Cyan
    },
    
    // Coordinates for all countries [latitude, longitude]
    // Edit manually [y, x]
    // higher y => top
    // higher x => right
    coordinates: {
        // Europe
        'Albania': [41.1533, 20.1683],
        'Austria': [47.5162, 14.5501],
        'Belarus': [53.7098, 27.9534],
        'Belgium': [50.5039, 4.4699],
        'Bosnia and Herzegovina': [43.9159, 17.6791],
        'Bulgaria': [40.7339, 21.4858],
        'Croatia': [45.1, 15.2],
        'Cyprus': [35.1264, 33.4299],
        'Czech Republic': [49.8175, 15.4730],
        'Denmark': [56.2639, 9.5018],
        'Estonia': [58.5953, 25.0136],
        'Finland': [61.9241, 25.7482],
        'France': [46.2276, 2.2137],
        'Germany': [49.1657, 6.4515],
        'Greece': [37.0742, 19.8243],
        'Hungary': [47.1625, 19.5033],
        'Iceland': [64.9631, -19.0208],
        'Ireland': [53.4129, -8.2439],
        'Italy': [40.8719, 8.2674],
        'Latvia': [56.8796, 24.6032],
        'Lithuania': [55.1694, 23.8813],
        'Luxembourg': [49.8153, 6.1296],
        'Malta': [35.9375, 14.3754],
        'Moldova': [47.4116, 28.3699],
        'Montenegro': [42.7087, 19.3744],
        'Netherlands': [52.1326, 5.2913],
        'North Macedonia': [41.6086, 21.7453],
        'Norway': [60.4720, 8.4689],
        'Poland': [51.9194, 19.1451],
        'Portugal': [37.3999, -10.2245],
        'Romania': [43.9432, 21.9668],
        'Russia': [61.5240, 105.3188],
        'Serbia': [44.0165, 21.0059],
        'Slovakia': [48.6690, 19.6990],
        'Slovenia': [46.1512, 14.9955],
        'Spain': [40.4637, -3.7492],
        'Sweden': [60.1282, 18.6435],
        'Switzerland': [46.8182, 8.2275],
        'Ukraine': [47.3794, 28.1656],
        'United Kingdom': [55.3781, -3.4360],
        
        // Asia
        'Afghanistan': [33.9391, 67.7100],
        'Armenia': [40.0691, 45.0382],
        'Azerbaijan': [40.1431, 47.5769],
        'Bahrain': [25.9304, 50.6378],
        'Bangladesh': [23.6850, 90.3563],
        'Bhutan': [27.5142, 90.4336],
        'Cambodia': [12.5657, 104.9910],
        'China': [35.8617, 104.1954],
        'Georgia': [42.3154, 43.3569],
        'India': [20.5937, 78.9629],
        'Indonesia': [-0.7893, 113.9213],
        'Iran': [32.4279, 53.6880],
        'Iraq': [33.2232, 43.6793],
        'Israel': [31.0461, 34.8516],
        'Japan': [36.2048, 138.2529],
        'Jordan': [30.5852, 36.2384],
        'Kazakhstan': [48.0196, 66.9237],
        'Kuwait': [29.3117, 47.4818],
        'Kyrgyzstan': [41.2044, 74.7661],
        'Laos': [19.8563, 102.4955],
        'Lebanon': [33.8547, 35.8623],
        'Malaysia': [4.2105, 101.9758],
        'Maldives': [3.2028, 73.2207],
        'Mongolia': [46.8625, 103.8467],
        'Myanmar': [21.9162, 95.9560],
        'Nepal': [28.3949, 84.1240],
        'North Korea': [40.3399, 127.5101],
        'Oman': [21.4735, 55.9754],
        'Pakistan': [30.3753, 69.3451],
        'Palestine': [31.9522, 35.2332],
        'Philippines': [12.8797, 121.7740],
        'Qatar': [25.3548, 51.1839],
        'Saudi Arabia': [23.8859, 45.0792],
        'Singapore': [1.3521, 103.8198],
        'South Korea': [35.9078, 127.7669],
        'Sri Lanka': [7.8731, 80.7718],
        'Syria': [34.8021, 38.9968],
        'Tajikistan': [38.8610, 71.2761],
        'Thailand': [15.8700, 100.9925],
        'Turkey': [38.9637, 35.2433],
        'Turkmenistan': [38.9697, 59.5563],
        'UAE': [23.4241, 53.8478],
        'Uzbekistan': [41.3775, 64.5853],
        'Vietnam': [14.0583, 108.2772],
        'Yemen': [15.5527, 48.5164],
        
        // Africa
        'Algeria': [28.0339, 1.6596],
        'Angola': [-11.2027, 17.8739],
        'Benin': [9.3077, 2.3158],
        'Botswana': [-22.3285, 24.6849],
        'Burkina Faso': [12.2383, -1.5616],
        'Burundi': [-3.3731, 29.9189],
        'Cameroon': [7.3697, 12.3547],
        'Cape Verde': [16.5388, -24.0132],
        'Central African Republic': [6.6111, 20.9394],
        'Chad': [15.4542, 18.7322],
        'Comoros': [-11.6455, 43.3333],
        'Democratic Republic of Congo': [-4.0383, 21.7587],
        'Djibouti': [11.8251, 42.5903],
        'Egypt': [26.0975, 30.0444],
        'Equatorial Guinea': [1.6508, 10.2679],
        'Eritrea': [15.1794, 39.7823],
        'Ethiopia': [9.1450, 40.4897],
        'Gabon': [-0.8037, 11.6094],
        'Gambia': [13.4432, -15.3101],
        'Ghana': [7.9465, -1.0232],
        'Guinea': [9.9456, -9.6966],
        'Guinea-Bissau': [11.8037, -15.1804],
        'Ivory Coast': [7.5400, -5.5471],
        'Kenya': [-0.0236, 37.9062],
        'Lesotho': [-29.6100, 28.2336],
        'Liberia': [6.4281, -9.4295],
        'Libya': [26.3351, 17.2283],
        'Madagascar': [-18.7669, 46.8691],
        'Malawi': [-13.2543, 34.3015],
        'Mali': [17.5707, -3.9962],
        'Mauritius': [-20.3484, 57.5522],
        'Morocco': [31.7917, -7.0926],
        'Mozambique': [-18.6657, 35.5296],
        'Namibia': [-22.9576, 18.4904],
        'Niger': [17.6078, 8.0817],
        'Nigeria': [9.0820, 8.6753],
        'Republic of Congo': [-0.2280, 15.8277],
        'Rwanda': [-1.9403, 29.8739],
        'Sao Tome and Principe': [0.1864, 6.6131],
        'Senegal': [14.4974, -14.4524],
        'Seychelles': [-4.6796, 55.4920],
        'Sierra Leone': [8.4606, -11.7799],
        'Somalia': [5.1521, 46.1996],
        'South Africa': [-30.5595, 22.9375],
        'Sudan': [12.8628, 30.2176],
        'Swaziland': [-26.5225, 31.4659],
        'Tanzania': [-6.3690, 34.8888],
        'Togo': [8.6195, 0.8248],
        'Tunisia': [33.8869, 9.5375],
        'Uganda': [1.3733, 32.2903],
        'Zambia': [-13.1339, 27.8493],
        'Zimbabwe': [-19.0154, 29.1549],
        
        // Americas
        'Antigua and Barbuda': [17.0608, -61.7964],
        'Argentina': [-38.4161, -63.6167],
        'Bahamas': [25.0343, -77.3963],
        'Barbados': [13.1939, -59.5432],
        'Belize': [17.1899, -88.4976],
        'Bolivia': [-16.2902, -63.5887],
        'Brazil': [-14.2350, -51.9253],
        'Canada': [56.1304, -106.3468],
        'Chile': [-35.6751, -71.5430],
        'Colombia': [4.5709, -74.2973],
        'Costa Rica': [9.7489, -83.7534],
        'Cuba': [21.5218, -77.7812],
        'Dominica': [15.4150, -61.3710],
        'Dominican Republic': [18.7357, -70.1627],
        'Ecuador': [-1.8312, -78.1834],
        'El Salvador': [13.7942, -88.8965],
        'French Guiana': [3.9339, -53.1258],
        'Grenada': [12.1165, -61.6790],
        'Guatemala': [15.7835, -90.2308],
        'Guyana': [4.8604, -58.9302],
        'Haiti': [18.9712, -72.2852],
        'Honduras': [15.2000, -86.2419],
        'Jamaica': [18.1096, -77.2975],
        'Mexico': [23.6345, -102.5528],
        'Nicaragua': [12.8654, -85.2072],
        'Panama': [8.5380, -80.7821],
        'Paraguay': [-23.4425, -58.4438],
        'Peru': [-9.1900, -75.0152],
        'Puerto Rico': [18.2208, -66.5901],
        'Saint Kitts and Nevis': [17.3578, -62.7830],
        'Saint Lucia': [13.9094, -60.9789],
        'Saint Vincent and the Grenadines': [12.9843, -61.2872],
        'Suriname': [3.9193, -56.0278],
        'Trinidad and Tobago': [10.6918, -61.2225],
        'United States': [39.8283, -98.5795],
        'Uruguay': [-32.5228, -55.7658],
        'Venezuela': [6.4238, -66.5897],
        
        // Oceania
        'Australia': [-25.2744, 133.7751],
        'Fiji': [-16.5780, 179.4144],
        'Kiribati': [-3.3704, -168.7340],
        'Marshall Islands': [7.1315, 171.1845],
        'Micronesia': [7.4256, 150.5508],
        'Nauru': [-0.5228, 166.9315],
        'New Zealand': [-40.9006, 174.8860],
        'Palau': [7.5150, 134.5825],
        'Papua New Guinea': [-6.3150, 143.9555],
        'Samoa': [-13.7590, -172.1046],
        'Solomon Islands': [-9.6457, 160.1562],
        'Tonga': [-21.1789, -175.1982],
        'Tuvalu': [-7.1095, 177.6493],
        'Vanuatu': [-15.3767, 166.9592],
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COUNTRY_DATABASE;
}