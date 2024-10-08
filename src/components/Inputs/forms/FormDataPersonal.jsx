import { Input, Form, Row, Col, DatePicker } from "antd";
import dayjs from "dayjs";
import PropTypes from "prop-types";

export function FormDataPersonal({
  formData,
  handleDateChangeWrapper,
  handlecpfChangeWrapper,
  handleTelephoneChangeWrapper,
  handlePhoneChangeWrapper,
  handleNameChangeWrapper,
  handleEmailChangeWrapper,
}) {
  const dateMaskPlaceHolder = "DD/MM/YYYY";
  const cpfMaskPlaceHolder = "___.___.___";
  const telephoneAndPhoneMaskPlaceHolder = "_____-____";
  const namePlaceHolder = "Seu nome";
  const emailPlaceHolder = "Seu E-mail";

  return (
    <Form layout="vertical">
      <br />
      <Row gutter={[18, 18]}>
        <Col xs={24} md={28}>
          <Form.Item label="Nome completo" required>
            <Input
              name="nome"
              size="middle"
              style={{ width: "100%" }}
              value={formData.nome}
              placeholder={namePlaceHolder}
              onChange={handleNameChangeWrapper}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Data de Nascimento" required>
            <DatePicker
              name="dataNascimento"
              size="middle"
              style={{ width: "100%" }}
              format={dateMaskPlaceHolder}
              placeholder="DD/MM/AAAA"
              inputReadOnly
              value={
                formData.dataNascimento
                  ? dayjs(formData.dataNascimento, dateMaskPlaceHolder)
                  : null
              }
              onChange={handleDateChangeWrapper}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="NIF" required>
            <Input
              name="cpf"
              size="middle"
              style={{ width: "100%" }}
              value={formData.cpf}
              onChange={handlecpfChangeWrapper}
              placeholder={cpfMaskPlaceHolder}
              maxLength={cpfMaskPlaceHolder.length}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="E-mail" required>
            <Input
              name="email"
              size="middle"
              type="email"
              style={{ width: "100%" }}
              value={formData.email}
              placeholder={emailPlaceHolder}
              onChange={handleEmailChangeWrapper}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Telefone" required>
            <Input
              name="telefone"
              size="middle"
              style={{ width: "100%" }}
              value={formData.telefone}
              onChange={handleTelephoneChangeWrapper}
              placeholder={telephoneAndPhoneMaskPlaceHolder}
              maxLength={telephoneAndPhoneMaskPlaceHolder.length}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Telemóvel (OPCIONAL)">
            <Input
              name="celular"
              size="middle"
              style={{ width: "100%" }}
              placeholder={telephoneAndPhoneMaskPlaceHolder}
              value={formData.celular}
              onChange={handlePhoneChangeWrapper}
            />
          </Form.Item>
        </Col>
      </Row>
      <br /> <br />
    </Form>
  );
}

FormDataPersonal.propTypes = {
  formData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    dataNascimento: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    celular: PropTypes.string,
  }).isRequired,
  handlecpfChangeWrapper: PropTypes.func.isRequired,
  handleDateChangeWrapper: PropTypes.func.isRequired,
  handleTelephoneChangeWrapper: PropTypes.func.isRequired,
  handlePhoneChangeWrapper: PropTypes.func.isRequired,
  handleNameChangeWrapper: PropTypes.func.isRequired,
  handleEmailChangeWrapper: PropTypes.func.isRequired,
};
