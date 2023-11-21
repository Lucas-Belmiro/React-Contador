import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContadorInteligente from "./Components/ContadorInteligente";

test("renderiza o componente corretamente", () => {
  const { getByText } = render(<ContadorInteligente />);
  const consumoTexto = getByText("Consumo atual da energia: 0 kwh");
  expect(consumoTexto).toBeInTheDocument();
});

test("verifica os botões de incremento e decremento", () => {
  const { getByText } = render(<ContadorInteligente />);
  const diminuirBotao = getByText("Diminuir consumo -");
  const aumentarBotao = getByText("Aumentar consumo +");

  expect(diminuirBotao).toBeInTheDocument();
  expect(aumentarBotao).toBeInTheDocument();
});

test("verifica a lógica de não permitir valores negativos", () => {
  const { getByText } = render(<ContadorInteligente />);

  const diminuirBotao = getByText("Diminuir consumo -");
  const consumoTexto = getByText(/Consumo atual da energia:/i);

  // Verifica se clicar no botão diminuir quando o valor é 0, o valor permanece 0
  fireEvent.click(diminuirBotao);
  expect(consumoTexto).toHaveTextContent("Consumo atual da energia: 0 kwh");

  // Aumenta o valor para 5
  fireEvent.click(getByText("Aumentar consumo +"));
  fireEvent.click(getByText("Aumentar consumo +"));
  fireEvent.click(getByText("Aumentar consumo +"));
  fireEvent.click(getByText("Aumentar consumo +"));
  fireEvent.click(getByText("Aumentar consumo +"));

  // Verifica se clicar no botão diminuir quando o valor é 5, o valor diminui para 4
  fireEvent.click(diminuirBotao);
  expect(consumoTexto).toHaveTextContent("Consumo atual da energia: 4 kwh");
});
