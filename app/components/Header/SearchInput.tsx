"use client";

import { useContext, useEffect, useRef } from "react";
import { MenuContext, SearchContext } from "@/app/components/RootApp";

export function SearchInput() {
	const { search, onSearch, isMobileSearchOpen } = useContext(SearchContext);
	const { isMenuOpen, toggleMenu } = useContext(MenuContext);
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (isMobileSearchOpen) {
			inputRef.current?.focus();
		}
	}, [isMobileSearchOpen]);

	return (
		<div className="search-wrapper">
			<svg
				className="mobile-search-icon"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.19348 6.0194C8.88602 3.32687 13.2515 3.32687 15.944 6.0194C18.4395 8.51489 18.6221 12.4474 16.4919 15.1532L19.9998 18.6611L18.9391 19.7218L15.4425 16.2251C12.7341 18.4528 8.72461 18.3011 6.19348 15.77C3.50094 13.0774 3.50094 8.71194 6.19348 6.0194ZM14.8834 7.08007C12.7766 4.97331 9.36089 4.97331 7.25414 7.08007C5.14738 9.18682 5.14738 12.6025 7.25414 14.7093C9.36089 16.816 12.7766 16.816 14.8834 14.7093C16.9901 12.6025 16.9901 9.18682 14.8834 7.08007Z"
					fill="#71717A"
				/>
			</svg>
			<input
				ref={inputRef}
				className="search-input"
				id="searchInputWeb"
				name="query"
				placeholder="מה תרצו לחפש?"
				list="search-suggestions"
				autoComplete="off"
				value={search}
				onChange={(e) => {
					onSearch(e.target.value);
					isMobileSearchOpen && isMenuOpen && toggleMenu();
				}}
			/>
			<datalist id="search-suggestions">
				<option value="התנדבות" />
				<option value="תרומה" />
				<option value="סושיאל" />
				<option value="ילדים" />
				<option value="אירוח משפחות" />
			</datalist>
		</div>
	);
}