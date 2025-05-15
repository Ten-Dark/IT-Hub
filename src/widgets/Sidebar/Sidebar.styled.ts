import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 300px;
	width: 100%;
	padding: 0 30px;
	gap: 45px 0;
`;

export const PostAdd = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.actionBackground};
	color: white;
	border-radius: 4px;
	padding: 12px 12px;
	min-width: 120px;
	width: 100%;
	gap: 0 10px;
	cursor: pointer;
`;

export const PlusIcon = styled(FaPlus)`
	color: ${({ theme }) => theme.colors.actionBackground};
	background: white;
	stroke: white;
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	border-radius: 100%;
	padding: 7px;
`;

export const Activities = styled.div``;
