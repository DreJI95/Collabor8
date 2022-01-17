import styled from "styled-components";

export const NavContainer = styled.header`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px 20px;

	/* typography */

	/* visual decorations */
	background-color: #00969e;
`;

export const Logo = styled.a`
	/* box model */

	/* typography */
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 600;

	/* visual decorations */
	color: black;
	text-decoration: none;
`;

export const NavLinks = styled.nav`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	/* typography */

	/* visual decorations */
`;

export const NavLink = styled.a`
	/* box model */
	padding: 0 10px;

	/* typography */
	font-size: 1.25rem;
	line-height: 1.75rem;

	/* visual decorations */
	color: black;
	text-decoration: none;
`;

export const SearchBar = styled.div`
	/* box model */
	align-items: center;
	border: 2px solid black;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	padding: 5px;

	/* typography */

	/* visual decorations */
`;

export const SearchInput = styled.input`
	/* box model */
	border: 1px solid black;
	border-radius: 5px;
	height: 100%;
	padding: 3px 0;

	/* typography */

	/* visual decorations */
`;

export const SearchInputLabel = styled.label`
	/* box model */
	padding-right: 5px;

	/* typography */
	font-size: 1rem;
	line-height: 1.5rem;

	/* visual decorations */
`;
