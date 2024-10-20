import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeadling() {
    const { container, headLine, containerMiddleBox, des, title } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headLine}></div>
                <div className={containerMiddleBox}>
                    <div className={des}>don't miss super offers</div>
                    <div className={title}>Our best products</div>
                </div>
                <div className={headLine}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadling;
