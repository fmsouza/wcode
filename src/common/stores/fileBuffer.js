import { action, computed, observable } from 'mobx';

let indexes = {};

class FileBufferStore {
    
    @observable loading = false;
    
    @observable activeFilePath = '';
    
    @observable openedFiles = [];

    @computed get activeFile() {
        const position = indexes[this.activeFilePath];
        return this.openedFiles[position];
    }

    @computed get fileStates() {
        return this.openedFiles.map(({ name, path }) => ({ name, path, active: path === this.activeFilePath }));
    }

    @action isLoading(state) {
        this.loading = Boolean(state);
    }
    
    @action selectFile(filePath) {
        this.activeFilePath = filePath;
    }
    
    @action addToBuffer(file) {
        const position = this.openedFiles.length;
        this.openedFiles.push(file);
        this.activeFilePath = file.path;
        indexes[file.path] = position;
    }
    
    @action close(filePath) {
        if (this.activeFilePath === filePath) this.activeFilePath = '';
        delete this.openedFiles[filePath];
        delete indexes[filePath];
    }

}
export default new FileBufferStore();