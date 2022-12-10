import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4cf0dd9ecdb19a7048daf57ead3ca5c0~c5_100x100.jpeg?x-expires=1670745600&x-signature=QHt84ReC%2Ffg5C5vWuMPZ1xXX8iI%3D"
                alt="a"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('useName')}>NguyenVana</span>
            </div>
        </div>
    );
}

export default AccountItem;
