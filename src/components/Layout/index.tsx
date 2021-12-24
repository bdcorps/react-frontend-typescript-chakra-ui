import { Box, Container, Flex } from '@chakra-ui/layout';
import { FunctionComponent, ReactChild, ReactChildren } from 'react';

interface LayoutProps {
    children: ReactChild | ReactChildren;
}

export const Layout: FunctionComponent<LayoutProps> = ({
    children
}: LayoutProps) => {
    return (
        <Box>
            <Flex direction="column" maxW={{ xl: '1200px' }} m="2rem auto">
                <Container maxW="container.xl">{children}</Container>
            </Flex>
        </Box>
    );
};
