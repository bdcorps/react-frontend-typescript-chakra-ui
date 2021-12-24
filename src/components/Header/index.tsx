import { useDisclosure } from '@chakra-ui/hooks';
import { Container } from '@chakra-ui/layout';
import { FunctionComponent } from 'react';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = ({}: HeaderProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return <Container maxW="container.xl"></Container>;
};

export default Header;
