import React, { useState, useEffect } from 'react';

// Custom hook for debounce
const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 500); // Adjust delay as needed

    // Function to handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Function to fetch customer names based on search term
    const fetchCustomerNames = async (searchTerm: string) => {
        try {
            // Replace with your actual API endpoint
            const response = await fetch(`https://api.example.com/customers?name=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSuggestions(data.names); // Assuming API returns an array of names
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchCustomerNames(debouncedSearchTerm);
        } else {
            setSuggestions([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search customer names..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <ul>
                {suggestions.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
