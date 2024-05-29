import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from '@yamada-ui/react';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button h={5} w={5} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
