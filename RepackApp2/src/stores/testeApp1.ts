export interface TesteApp1Props {
  numberApp1: number;
  setNumberApp1: (value: number) => void;
}

const testeApp1 = set => ({
  numberApp1: 1,
  setNumberApp1: (value: number) => {
    set(state => ({ numberApp1: state.numberApp1 + value }));
  },
});

export default testeApp1;
