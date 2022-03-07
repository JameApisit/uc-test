class SystemError extends Error {
  private code: number;
  constructor(name: string, message: string, code: number) {
    super();
    this.name = name;
    this.code = code;
    this.message = message;
  }
}

export default SystemError;
