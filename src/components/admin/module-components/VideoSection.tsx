
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import { EnhancedModule, VideoLecture } from '@/types/course';

interface VideoSectionProps {
  module: EnhancedModule;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ module, setModules, modules }) => {
  const addVideoLecture = (moduleId: string) => {
    const newVideo = {
      id: `video-${Date.now()}`,
      title: '',
      type: 'video' as const,
      content: '',
      duration: 15,
      url: ''
    };
    
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { ...module, videoLectures: [...module.videoLectures, newVideo] } 
          : module
      )
    );
  };

  const updateVideoLecture = (moduleId: string, videoId: string, field: keyof VideoLecture, value: any) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              videoLectures: module.videoLectures.map(video => 
                video.id === videoId 
                  ? { ...video, [field]: value } 
                  : video
              ) 
            } 
          : module
      )
    );
  };

  const removeVideoLecture = (moduleId: string, videoId: string) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              videoLectures: module.videoLectures.filter(video => video.id !== videoId) 
            } 
          : module
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Video Lectures</h4>
        <Button 
          type="button" 
          size="sm" 
          variant="outline" 
          onClick={() => addVideoLecture(module.id)}
          className="flex items-center gap-1"
        >
          <Plus className="h-3 w-3" />
          Add Video
        </Button>
      </div>
      
      {module.videoLectures.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No video lectures added yet. Click "Add Video" to create one.
        </div>
      ) : (
        <div className="space-y-4">
          {module.videoLectures.map((video, vIndex) => (
            <Card key={video.id}>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-medium">Video {vIndex + 1}</h5>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => removeVideoLecture(module.id, video.id)}
                    className="text-destructive h-6 w-6 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input
                      value={video.title}
                      onChange={(e) => updateVideoLecture(module.id, video.id, 'title', e.target.value)}
                      placeholder="Video title"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">URL</label>
                      <Input
                        value={video.url || ''}
                        onChange={(e) => updateVideoLecture(module.id, video.id, 'url', e.target.value)}
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Duration (min)</label>
                      <Input
                        type="number"
                        value={video.duration || 0}
                        onChange={(e) => updateVideoLecture(module.id, video.id, 'duration', parseInt(e.target.value))}
                        placeholder="15"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <Textarea
                      value={video.content}
                      onChange={(e) => updateVideoLecture(module.id, video.id, 'content', e.target.value)}
                      placeholder="Video description and key points..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoSection;
