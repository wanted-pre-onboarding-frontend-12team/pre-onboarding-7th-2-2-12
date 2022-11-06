import { PropsWithChildren } from 'react';
import { SideBar, Header, Title } from '@src/components';
import * as S from './styled';

const Layout = (props: PropsWithChildren) => {
	return (
		<S.GlobalContainer>
			<SideBar />
			<S.ContentContainer>
				<Header />
				<Title />
				{props.children}
			</S.ContentContainer>
		</S.GlobalContainer>
	);
};

export default Layout;
