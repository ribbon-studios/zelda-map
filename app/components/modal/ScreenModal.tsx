import { useSelector } from 'react-redux';
import { Modal } from '../common/Modal';
import { ScreenModalContent } from './ScreenModalContent';
import { selectScreen } from '../../store/slices/screen.slice';
import { Maps } from '../../constants/maps';

export function ScreenModal() {
  const screen = useSelector(selectScreen);

  console.log(screen);

  return <Modal opened={Boolean(screen)}>{screen && <ScreenModalContent map={Maps.QUEST1} />}</Modal>;
}
