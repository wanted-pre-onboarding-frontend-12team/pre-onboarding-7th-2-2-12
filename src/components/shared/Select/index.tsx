/* eslint no-unused-vars: 0 */
import { PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
	value: string;
	defaultValue?: string;
	padding?: string;
	fontSize?: string;
	fontWeight?: number;
	arrowPadding: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & PropsWithChildren;

const Select = ({ children, ...props }: Props) => {
	return <S.Select {...props}>{children}</S.Select>;
};

export default Select;
