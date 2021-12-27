class LocalStorage {
  public key: string;

  constructor(key: string) {
    this.key = key;
  }

  get(): string | null {
    const value = typeof window !== 'undefined' ? localStorage.getItem(this.key) : null;
    return value;
  }

  set(value: string) {
    return typeof window !== 'undefined' ? localStorage.setItem(this.key, value) : null;
  }

  remove() {
    return typeof window !== 'undefined' ? localStorage.removeItem(this.key) : null;
  }
}

export const authToken = new LocalStorage('twitter-login-token');
