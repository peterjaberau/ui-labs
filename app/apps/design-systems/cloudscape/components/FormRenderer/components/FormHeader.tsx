import { FC, isValidElement } from 'react';
import Header, { HeaderProps } from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';

export interface FormHeaderProps {
    header: React.ReactNode;
    headerVariant?: HeaderProps['variant'];
    description?: HeaderProps['description'];
    info?: React.ReactNode;
}

const FormHeader: FC<FormHeaderProps> = ({ header, description, info, headerVariant }) => {
    if (header && isValidElement(header) && header.type === Header) {
        return header;
    }

    const headerInfo =
        info && typeof info === 'string' ? (
            <Link variant="info" href={info} rel="noopener noreferrer" target="_blank">
                Info
            </Link>
        ) : (
            info
        );

    return (
        <Header variant={headerVariant} description={description} info={headerInfo}>
            {header}
        </Header>
    );
};

export default FormHeader;
