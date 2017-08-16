import { action, observable } from 'mobx';

class FileBufferStore {
    
    @observable loading = false;
    
    @observable activeFilePath = '';
    
    @observable openedFiles = [];

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action addToBuffer(file) {
        this.openedFiles.push(file);
        this.activeFilePath = file.path;
    }
    
    @action close(filePath) {
        this.openedFiles = this.openedFiles.filter(({ path }) => path !== filePath);
    }

}
export default new FileBufferStore();