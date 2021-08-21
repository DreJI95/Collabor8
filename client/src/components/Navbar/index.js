import React from "react";

// import styled components
import {
	NavContainer,
	Logo,
	NavLinks,
	NavLink,
	SearchBar,
	SearchInput,
	SearchInputLabel,
} from "./styles";

const Navbar = () => {
	return (
		<NavContainer>
			<Logo href="/">Collabor8</Logo>
			<NavLinks>
				{/* links to be set up using react-router */}
				<NavLink href="/">Home</NavLink>
				<SearchBar>
					<SearchInputLabel htmlFor="search">Search</SearchInputLabel>
					<SearchInput id="search"></SearchInput>
				</SearchBar>
				<NavLink href="/">Teams</NavLink>
				<NavLink href="/">Projects</NavLink>
				<NavLink href="/">My Account</NavLink>
			</NavLinks>
		</NavContainer>
	);
};

export default Navbar;
