class LocalStorage {
  public key: string;

  constructor(key: string) {
    this.key = key;
  }

  get(): string | null {
    const value = localStorage.getItem(this.key);
    return value;
  }

  set(value: string) {
    localStorage.setItem(this.key, value);
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

export const authToken = new LocalStorage('twitter-login-token');
